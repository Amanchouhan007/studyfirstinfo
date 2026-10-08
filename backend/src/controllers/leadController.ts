import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { EligibilityService } from '../services/EligibilityService';

const prisma = new PrismaClient();
const eligibilityService = new EligibilityService();

export const evaluateLead = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId; // if authenticated
    const data = req.body;
    
    const evaluation = await eligibilityService.evaluateProfile({
      ...data,
      userId
    });

    res.json(evaluation);
  } catch (error) {
    console.error('Error evaluating lead:', error);
    res.status(500).json({ error: 'Failed to process evaluation' });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    // Only ADMIN should access this
    const role = (req as any).role;
    if (role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden: Admin access required' });
    }

    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50 // Limit for foundation
    });

    res.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};
