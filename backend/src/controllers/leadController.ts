import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';
import { EligibilityService } from '../services/EligibilityService';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();
const eligibilityService = new EligibilityService();

export const evaluateLead = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const data = req.body;
    
    const evaluation = await eligibilityService.evaluateProfile({
      ...data,
      userId
    });

    return res.json(evaluation);
  } catch (error) {
    logger.error('Error evaluating lead', error);
    return res.status(500).json({ error: 'Failed to process evaluation' });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    const role = (req as any).role;
    if (role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden: Admin access required' });
    }

    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    return res.json(leads);
  } catch (error) {
    logger.error('Error fetching leads', error);
    return res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

const downloadGuideSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().optional(),
  phone: z.string().optional(),
  emailOrPhone: z.string().optional(),
  studyLevel: z.string().optional(),
  preferredCountry: z.string().optional()
}).refine(data => data.email || data.phone || data.emailOrPhone, {
  message: 'Either email or phone number is required'
});

export const downloadGuide = async (req: Request, res: Response) => {
  try {
    const parseResult = downloadGuideSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: parseResult.error.flatten() 
      });
    }

    const { name, email, phone, emailOrPhone, studyLevel, preferredCountry } = parseResult.data;

    let resolvedEmail = email || null;
    let resolvedPhone = phone || null;

    if (!resolvedEmail && !resolvedPhone && emailOrPhone) {
      if (emailOrPhone.includes('@')) {
        resolvedEmail = emailOrPhone;
      } else {
        resolvedPhone = emailOrPhone;
      }
    }

    const userId = (req as any).userId || null;

    // Persist lead with source SCHOLARSHIP_GUIDE
    const lead = await prisma.lead.create({
      data: {
        userId,
        name: name.trim(),
        email: resolvedEmail ? resolvedEmail.trim().toLowerCase() : null,
        phone: resolvedPhone ? resolvedPhone.trim() : null,
        studyLevel: studyLevel || 'Not specified',
        preferredCountry: preferredCountry || 'Europe / Global',
        source: 'SCHOLARSHIP_GUIDE',
        eligibilityStatus: 'GUIDE_REQUESTED'
      }
    });

    logger.info('Lead captured for scholarship guide download', { id: lead.id, name, email: resolvedEmail });

    // Check if real PDF asset exists
    const guidePdfPath = path.resolve(__dirname, '../../assets/scholarship-guide.pdf');

    if (fs.existsSync(guidePdfPath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename="StudyFirstInfo-Scholarship-University-Guide.pdf"'
      );
      const readStream = fs.createReadStream(guidePdfPath);
      return readStream.pipe(res);
    }

    // Asset missing gracefully fallback message (do not crash)
    return res.status(200).json({
      success: true,
      delivered: false,
      message: 'Thank you! Your scholarship & university guide request has been received. Our counselor will send the official PDF guide directly to your email or WhatsApp shortly.',
      leadId: lead.id
    });
  } catch (error) {
    logger.error('Error handling scholarship guide download request', error);
    return res.status(500).json({ error: 'Failed to process guide download request' });
  }
};
