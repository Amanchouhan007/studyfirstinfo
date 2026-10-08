import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    let profile = await prisma.studentProfile.findUnique({
      where: { userId }
    });

    if (!profile) {
      // Create empty profile if not exists
      profile = await prisma.studentProfile.create({
        data: {
          userId,
          studyLevel: 'Not specified',
          academicScore: 0
        }
      });
    }

    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { studyLevel, academicScore, englishTestType, englishScore, budget, preferredCountry } = req.body;

    const profile = await prisma.studentProfile.upsert({
      where: { userId },
      update: {
        studyLevel,
        academicScore: academicScore ? parseFloat(academicScore) : 0,
        englishTestType,
        englishScore,
        budget,
        preferredCountry
      },
      create: {
        userId,
        studyLevel: studyLevel || 'Not specified',
        academicScore: academicScore ? parseFloat(academicScore) : 0,
        englishTestType,
        englishScore,
        budget,
        preferredCountry
      }
    });

    res.json(profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};
