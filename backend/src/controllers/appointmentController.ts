import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

// Shared business constant for paid counseling fee
export const COUNSELING_PAID_FEE_BDT = 500;

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { counselorId, counselorName, date, type, trxId } = req.body;

    if (!date) {
      return res.status(400).json({ error: 'Consultation date is required' });
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    // Resolve counselor record strictly from existing database rows
    let counselor = null;
    if (counselorId) {
      counselor = await prisma.counselor.findUnique({ where: { id: counselorId } });
    } else if (counselorName) {
      counselor = await prisma.counselor.findFirst({ where: { name: counselorName } });
    }

    if (!counselor) {
      return res.status(400).json({ error: 'Counselor not found' });
    }

    // Prevent double booking: check for existing non-cancelled appointment with same counselor at same date/time
    const existingBooking = await prisma.appointment.findFirst({
      where: {
        counselorId: counselor.id,
        date: parsedDate,
        status: {
          notIn: ['CANCELLED', 'PAYMENT_REJECTED']
        }
      }
    });

    if (existingBooking) {
      return res.status(409).json({
        error: 'This time slot is already booked, please choose another.'
      });
    }

    // Server-enforced pricing and duration rules (never trust client prices)
    const isPaid = String(type).toUpperCase() === 'PAID';
    let durationMinutes = 15;
    let fee = 0;
    let paymentStatus = 'NOT_REQUIRED';
    let cleanTrxId: string | null = null;

    if (isPaid) {
      if (!trxId || !String(trxId).trim()) {
        return res.status(400).json({
          error: 'Transaction ID (TrxID) is required for paid counseling sessions'
        });
      }
      durationMinutes = 45;
      fee = COUNSELING_PAID_FEE_BDT;
      paymentStatus = 'PENDING';
      cleanTrxId = String(trxId).trim();
    }

    const appointment = await prisma.appointment.create({
      data: {
        userId,
        counselorId: counselor.id,
        date: parsedDate,
        type: isPaid ? 'PAID' : 'FREE',
        durationMinutes,
        fee,
        paymentStatus,
        trxId: cleanTrxId,
        status: 'SCHEDULED'
      },
      include: {
        counselor: true
      }
    });

    return res.status(201).json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({ error: 'Failed to create appointment' });
  }
};

export const getMyAppointments = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const appointments = await prisma.appointment.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      include: {
        counselor: true
      }
    });

    return res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

export const verifyAppointmentPayment = async (req: Request, res: Response) => {
  try {
    const role = (req as any).role;
    if (role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden: Admin access required' });
    }

    const id = String(req.params.id);
    const { paymentStatus } = req.body;

    const normalizedStatus = String(paymentStatus).toUpperCase();
    if (!['PAID', 'REJECTED'].includes(normalizedStatus)) {
      return res.status(400).json({ error: 'paymentStatus must be PAID or REJECTED' });
    }

    const existing = await prisma.appointment.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    const updated = await prisma.appointment.update({
      where: { id },
      data: {
        paymentStatus: normalizedStatus,
        status: normalizedStatus === 'PAID' ? 'CONFIRMED' : 'PAYMENT_REJECTED'
      },
      include: {
        counselor: true
      }
    });

    return res.json(updated);
  } catch (error) {
    console.error('Error verifying payment:', error);
    return res.status(500).json({ error: 'Failed to verify payment' });
  }
};
