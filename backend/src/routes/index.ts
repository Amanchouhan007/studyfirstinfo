import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { getCountries, getCountryByIdOrCode, getUniversities, getCourses } from '../controllers/catalogController';
import { register, login, logout, me } from '../controllers/authController';
import { getProfile, updateProfile } from '../controllers/profileController';
import { evaluateLead, getLeads, downloadGuide } from '../controllers/leadController';
import { getEvents, createEventRegistration, getEventRegistrations } from '../controllers/eventController';
import { requireAuth, optionalAuth, requireRole } from '../middleware/authMiddleware';
import { authLimiter, leadLimiter } from '../middleware/rateLimiter';
import { createAppointment, getMyAppointments, verifyAppointmentPayment } from '../controllers/appointmentController';
import { createApplication, getMyApplications } from '../controllers/applicationController';
import {
  uploadDocument,
  documentUploadMiddleware,
  getMyDocuments,
  getDocumentFile,
  deleteDocument,
  getAdminDocuments,
  updateDocumentStatus
} from '../controllers/documentController';
import { getAdminAppointments, getAdminApplications } from '../controllers/adminController';

const prisma = new PrismaClient();
const router = Router();

// Health Check with Database Connection Verification
router.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return res.status(200).json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(503).json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error?.message || 'Database connection failed'
    });
  }
});

// Auth Routes (Rate Limited: 10 per 15 min)
router.post('/auth/register', authLimiter, register);
router.post('/auth/login', authLimiter, login);
router.post('/auth/logout', logout);
router.get('/auth/me', requireAuth, me);

// Student Profile (Authenticated owner)
router.get('/profile', requireAuth, getProfile);
router.put('/profile', requireAuth, updateProfile);

// Leads & Eligibility Evaluation (Rate Limited: 20 per hour)
router.post('/eligibility/evaluate', leadLimiter, optionalAuth, evaluateLead);
router.get('/leads', requireAuth, requireRole('ADMIN'), getLeads);
router.post('/leads/download-guide', leadLimiter, optionalAuth, downloadGuide);

// Course and Country Catalog (Public)
router.get('/countries', getCountries);
router.get('/countries/:identifier', getCountryByIdOrCode);
router.get('/universities', getUniversities);
router.get('/courses', getCourses);

// Events & Registrations
router.get('/events', getEvents);
router.post('/event-registrations', leadLimiter, optionalAuth, createEventRegistration);
router.get('/event-registrations', requireAuth, requireRole('ADMIN'), getEventRegistrations);

// Appointments
router.post('/appointments', requireAuth, createAppointment);
router.get('/appointments', requireAuth, getMyAppointments);
router.patch('/appointments/:id/verify-payment', requireAuth, requireRole('ADMIN'), verifyAppointmentPayment);

// Applications
router.post('/applications', requireAuth, createApplication);
router.get('/applications', requireAuth, getMyApplications);

// Student Documents (Private)
router.post('/documents', requireAuth, documentUploadMiddleware, uploadDocument);
router.get('/documents', requireAuth, getMyDocuments);
router.get('/documents/:id/file', requireAuth, getDocumentFile);
router.delete('/documents/:id', requireAuth, deleteDocument);

// Admin Documents Review Desk
router.get('/admin/documents', requireAuth, requireRole('ADMIN', 'COUNSELOR'), getAdminDocuments);
router.patch('/documents/:id/status', requireAuth, requireRole('ADMIN', 'COUNSELOR'), updateDocumentStatus);

// Admin Management Desks (Role: ADMIN)
router.get('/admin/appointments', requireAuth, requireRole('ADMIN'), getAdminAppointments);
router.get('/admin/applications', requireAuth, requireRole('ADMIN'), getAdminApplications);

export default router;
