import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { storageService } from '../services/storageService';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

// Multer in-memory configuration
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png'
]);

const ALLOWED_EXTENSIONS = new Set(['.pdf', '.jpg', '.jpeg', '.png']);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB max
  },
  fileFilter: (_req: any, file: any, cb: any) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    if (!ALLOWED_MIME_TYPES.has(file.mimetype) || !ALLOWED_EXTENSIONS.has(ext)) {
      return cb(new Error('Invalid file type. Only PDF, JPG, and PNG files under 5MB are permitted.'));
    }
    cb(null, true);
  }
});

export const documentUploadMiddleware = upload.single('file');

function detectFileType(buffer: Buffer): { mimeType: string; allowedExtensions: string[] } | null {
  if (!buffer || buffer.length < 3) return null;

  // PDF starts with "%PDF-" (25 50 44 46 2D)
  if (
    buffer.length >= 5 &&
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46 &&
    buffer[4] === 0x2d
  ) {
    return { mimeType: 'application/pdf', allowedExtensions: ['.pdf'] };
  }

  // JPEG starts with FF D8 FF
  if (
    buffer.length >= 3 &&
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[2] === 0xff
  ) {
    return { mimeType: 'image/jpeg', allowedExtensions: ['.jpg', '.jpeg'] };
  }

  // PNG starts with 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return { mimeType: 'image/png', allowedExtensions: ['.png'] };
  }

  return null;
}

/**
 * Upload student document
 * POST /api/documents
 */
export const uploadDocument = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const file = (req as any).file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded or file exceeds 5MB limit.' });
    }

    const { type } = req.body;
    if (!type || !String(type).trim()) {
      return res.status(400).json({ error: 'Document type is required.' });
    }

    const originalName = path.basename(file.originalname).replace(/[^a-zA-Z0-9._-]/g, '_');
    const ext = path.extname(originalName).toLowerCase();

    // Verify real file type from buffer bytes (magic bytes check)
    const detected = detectFileType(file.buffer);
    if (!detected || !detected.allowedExtensions.includes(ext)) {
      return res.status(400).json({ error: 'File content does not match an allowed type (PDF, JPG, PNG)' });
    }

    const detectedMime = detected.mimeType;
    const secureKey = `doc-${Date.now()}-${crypto.randomBytes(8).toString('hex')}${ext}`;

    // Persist file through private storage driver using detected MIME type
    await storageService.saveFile(secureKey, file.buffer, detectedMime);

    // Save record to DB
    const document = await prisma.studentDocument.create({
      data: {
        userId: String(userId),
        type: String(type).trim(),
        fileName: originalName,
        fileKey: secureKey,
        mimeType: detectedMime,
        fileSize: file.size,
        status: 'UPLOADED'
      }
    });

    logger.info('Student document uploaded successfully', { id: document.id, userId, type });
    return res.status(201).json(document);
  } catch (error: any) {
    logger.error('Error uploading document', error);
    return res.status(500).json({ error: error.message || 'Failed to upload document.' });
  }
};

/**
 * Fetch own documents
 * GET /api/documents
 */
export const getMyDocuments = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const documents = await prisma.studentDocument.findMany({
      where: { userId: String(userId) },
      orderBy: { createdAt: 'desc' }
    });

    return res.json(documents);
  } catch (error) {
    logger.error('Error fetching student documents', error);
    return res.status(500).json({ error: 'Failed to retrieve documents.' });
  }
};

/**
 * Stream private document file
 * GET /api/documents/:id/file
 */
export const getDocumentFile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const role = (req as any).role;
    const id = String(req.params.id);

    const document = await prisma.studentDocument.findUnique({
      where: { id }
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Authorization: Owner, Counselor, or Admin only
    const isOwner = document.userId === userId;
    const isStaff = role === 'ADMIN' || role === 'COUNSELOR';

    if (!isOwner && !isStaff) {
      return res.status(403).json({ error: 'Forbidden: Access to this private document is restricted.' });
    }

    const { stream, contentLength } = await storageService.getFileStream(document.fileKey);

    res.setHeader('Content-Type', document.mimeType);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader(
      'Content-Disposition',
      `inline; filename="${encodeURIComponent(document.fileName)}"`
    );
    if (contentLength) {
      res.setHeader('Content-Length', contentLength);
    }

    return stream.pipe(res);
  } catch (error) {
    logger.error('Error streaming document file', error);
    return res.status(500).json({ error: 'Failed to stream document file.' });
  }
};

/**
 * Delete student document
 * DELETE /api/documents/:id
 */
export const deleteDocument = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const id = String(req.params.id);

    const document = await prisma.studentDocument.findUnique({
      where: { id }
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Owner only
    if (document.userId !== userId) {
      return res.status(403).json({ error: 'Forbidden: You can only delete your own documents.' });
    }

    // Block deletion if verified
    if (document.status === 'VERIFIED') {
      return res.status(400).json({ error: 'Verified documents cannot be deleted. Contact your counselor.' });
    }

    // Remove from storage and database
    await storageService.deleteFile(document.fileKey);
    await prisma.studentDocument.delete({ where: { id } });

    logger.info('Student document deleted', { id, userId });
    return res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    logger.error('Error deleting document', error);
    return res.status(500).json({ error: 'Failed to delete document.' });
  }
};

/**
 * Admin/Counselor list documents
 * GET /api/admin/documents
 */
export const getAdminDocuments = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(String(req.query.page || '1'), 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(String(req.query.pageSize || '20'), 10)));
    const skip = (page - 1) * pageSize;

    const [documents, total] = await Promise.all([
      prisma.studentDocument.findMany({
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true
            }
          }
        }
      }),
      prisma.studentDocument.count()
    ]);

    return res.json({
      documents,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    });
  } catch (error) {
    logger.error('Error fetching admin documents', error);
    return res.status(500).json({ error: 'Failed to fetch documents list.' });
  }
};

/**
 * Admin/Counselor update document review status
 * PATCH /api/documents/:id/status
 */
export const updateDocumentStatus = async (req: Request, res: Response) => {
  try {
    const reviewerId = (req as any).userId;
    const id = String(req.params.id);
    const { status, reviewFeedback } = req.body;

    const validStatuses = ['UPLOADED', 'UNDER_REVIEW', 'VERIFIED', 'REJECTED'];
    const normalizedStatus = String(status).toUpperCase();

    if (!validStatuses.includes(normalizedStatus)) {
      return res.status(400).json({ error: `Status must be one of: ${validStatuses.join(', ')}` });
    }

    if (normalizedStatus === 'REJECTED' && (!reviewFeedback || !String(reviewFeedback).trim())) {
      return res.status(400).json({ error: 'A rejection reason is required in reviewFeedback when rejecting a document.' });
    }

    const existing = await prisma.studentDocument.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: 'Document not found' });
    }

    const updated = await prisma.studentDocument.update({
      where: { id },
      data: {
        status: normalizedStatus,
        reviewFeedback: reviewFeedback ? String(reviewFeedback).trim() : null,
        reviewedById: reviewerId ? String(reviewerId) : null
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    logger.info('Document status updated', { id, status: normalizedStatus, reviewerId });
    return res.json(updated);
  } catch (error) {
    logger.error('Error updating document status', error);
    return res.status(500).json({ error: 'Failed to update document status.' });
  }
};
