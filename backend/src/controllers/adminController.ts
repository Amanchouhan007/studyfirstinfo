import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

/**
 * Fetch all appointments with payment & type filtering
 * GET /api/admin/appointments
 */
export const getAdminAppointments = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(String(req.query.page || '1'), 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(String(req.query.pageSize || '20'), 10)));
    const skip = (page - 1) * pageSize;

    const { paymentStatus, type } = req.query;

    const where: any = {};
    if (paymentStatus && typeof paymentStatus === 'string') {
      where.paymentStatus = paymentStatus.toUpperCase();
    }
    if (type && typeof type === 'string') {
      where.type = type.toUpperCase();
    }

    const [appointments, total] = await Promise.all([
      prisma.appointment.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { date: 'desc' },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true
            }
          },
          counselor: {
            select: {
              id: true,
              name: true,
              specializations: true
            }
          }
        }
      }),
      prisma.appointment.count({ where })
    ]);

    return res.json({
      appointments,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    });
  } catch (error) {
    logger.error('Error fetching admin appointments', error);
    return res.status(500).json({ error: 'Failed to fetch appointments.' });
  }
};

/**
 * Fetch all student applications
 * GET /api/admin/applications
 */
export const getAdminApplications = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(String(req.query.page || '1'), 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(String(req.query.pageSize || '20'), 10)));
    const skip = (page - 1) * pageSize;

    const [applications, total] = await Promise.all([
      prisma.application.findMany({
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
      prisma.application.count()
    ]);

    return res.json({
      applications,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    });
  } catch (error) {
    logger.error('Error fetching admin applications', error);
    return res.status(500).json({ error: 'Failed to fetch applications.' });
  }
};
