import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { encryptText, decryptText } from '../utils/crypto';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

const profileUpdateSchema = z.object({
  studyLevel: z.string().optional(),
  academicScore: z.union([z.number(), z.string()]).optional(),
  englishTestType: z.string().nullable().optional(),
  englishScore: z.string().nullable().optional(),
  budget: z.string().nullable().optional(),
  preferredCountry: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  dateOfBirth: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
  nidOrPassport: z.string().nullable().optional(),
  sscBoard: z.string().nullable().optional(),
  sscGpa: z.string().nullable().optional(),
  sscYear: z.string().nullable().optional(),
  hscBoard: z.string().nullable().optional(),
  hscGpa: z.string().nullable().optional(),
  hscYear: z.string().nullable().optional(),
  undergradUni: z.string().nullable().optional(),
  undergradCgpa: z.string().nullable().optional(),
  undergradYear: z.string().nullable().optional(),
  ieltsListening: z.string().nullable().optional(),
  ieltsReading: z.string().nullable().optional(),
  ieltsWriting: z.string().nullable().optional(),
  ieltsSpeaking: z.string().nullable().optional(),
}).passthrough();

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    let profile = await prisma.studentProfile.findUnique({
      where: { userId }
    });

    if (!profile) {
      profile = await prisma.studentProfile.create({
        data: {
          userId,
          studyLevel: 'Not specified',
          academicScore: 0
        }
      });
    }

    // Decrypt sensitive NID/Passport before returning to owner
    const decryptedProfile = {
      ...profile,
      nidOrPassport: decryptText(profile.nidOrPassport)
    };

    return res.json(decryptedProfile);
  } catch (error) {
    logger.error('Error fetching profile', error);
    return res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const parseResult = profileUpdateSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: parseResult.error.flatten() 
      });
    }

    const data = parseResult.data;

    let parsedAcademicScore = 0;
    if (data.academicScore !== undefined && data.academicScore !== null) {
      const num = typeof data.academicScore === 'number' 
        ? data.academicScore 
        : parseFloat(String(data.academicScore));
      parsedAcademicScore = isNaN(num) ? 0 : num;
    }

    // Encrypt sensitive field at rest
    const encryptedNidOrPassport = data.nidOrPassport !== undefined
      ? encryptText(data.nidOrPassport)
      : undefined;

    const profileData = {
      studyLevel: data.studyLevel || 'Not specified',
      academicScore: parsedAcademicScore,
      englishTestType: data.englishTestType,
      englishScore: data.englishScore ? String(data.englishScore) : null,
      budget: data.budget,
      preferredCountry: data.preferredCountry,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      nidOrPassport: encryptedNidOrPassport,
      sscBoard: data.sscBoard,
      sscGpa: data.sscGpa ? String(data.sscGpa) : null,
      sscYear: data.sscYear ? String(data.sscYear) : null,
      hscBoard: data.hscBoard,
      hscGpa: data.hscGpa ? String(data.hscGpa) : null,
      hscYear: data.hscYear ? String(data.hscYear) : null,
      undergradUni: data.undergradUni,
      undergradCgpa: data.undergradCgpa ? String(data.undergradCgpa) : null,
      undergradYear: data.undergradYear ? String(data.undergradYear) : null,
      ieltsListening: data.ieltsListening ? String(data.ieltsListening) : null,
      ieltsReading: data.ieltsReading ? String(data.ieltsReading) : null,
      ieltsWriting: data.ieltsWriting ? String(data.ieltsWriting) : null,
      ieltsSpeaking: data.ieltsSpeaking ? String(data.ieltsSpeaking) : null,
    };

    const updatedProfile = await prisma.studentProfile.upsert({
      where: { userId },
      update: profileData,
      create: {
        userId,
        ...profileData
      }
    });

    // Return decrypted representation to the authenticated owner
    const responseProfile = {
      ...updatedProfile,
      nidOrPassport: decryptText(updatedProfile.nidOrPassport)
    };

    return res.json(responseProfile);
  } catch (error) {
    logger.error('Error updating profile', error);
    return res.status(500).json({ error: 'Failed to update profile' });
  }
};
