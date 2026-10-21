import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateTrackingId = (): string => {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `SF-${new Date().getFullYear()}-${randomNum}`;
};

export const createApplication = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { country, university, program, track } = req.body;

    if (!country || !String(country).trim()) {
      return res.status(400).json({ error: 'Destination country is required' });
    }
    if (!university || !String(university).trim()) {
      return res.status(400).json({ error: 'University name is required' });
    }
    if (!program || !String(program).trim()) {
      return res.status(400).json({ error: 'Program name is required' });
    }

    // Server-enforced fee: self-application is always 0 BDT (never trust client)
    const enforcedFee = 0;
    const applicationTrack = track && typeof track === 'string' ? track : 'SELF_APPLY';

    // Generate unique readable tracking ID
    let trackingId = generateTrackingId();
    let collisionCheck = await prisma.application.findUnique({ where: { trackingId } });
    let attempts = 0;
    while (collisionCheck && attempts < 5) {
      trackingId = generateTrackingId();
      collisionCheck = await prisma.application.findUnique({ where: { trackingId } });
      attempts++;
    }

    const application = await prisma.application.create({
      data: {
        trackingId,
        userId,
        country: String(country).trim(),
        university: String(university).trim(),
        program: String(program).trim(),
        track: applicationTrack,
        fee: enforcedFee,
        status: 'SUBMITTED'
      }
    });

    return res.status(201).json(application);
  } catch (error) {
    console.error('Error creating application:', error);
    return res.status(500).json({ error: 'Failed to create application' });
  }
};

export const getMyApplications = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const applications = await prisma.application.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    return res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return res.status(500).json({ error: 'Failed to fetch applications' });
  }
};
