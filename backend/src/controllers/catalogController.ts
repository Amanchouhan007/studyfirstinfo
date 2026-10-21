import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fallback seed catalog for offline/local dev when database is not connected
const fallbackCountries = [
  { id: 'hungary', code: 'HU', name: 'Hungary', region: 'Europe', status: 'ACTIVE', universities: [] },
  { id: 'greece', code: 'GR', name: 'Greece', region: 'Europe', status: 'ACTIVE', universities: [] },
  { id: 'russia', code: 'RU', name: 'Russia', region: 'Russia', status: 'ACTIVE', universities: [] },
  { id: 'china', code: 'CN', name: 'China', region: 'Asia', status: 'ACTIVE', universities: [] },
  { id: 'united-kingdom', code: 'GB', name: 'United Kingdom', region: 'Commonwealth', status: 'ACTIVE', universities: [] },
  { id: 'malaysia', code: 'MY', name: 'Malaysia', region: 'Asia', status: 'ACTIVE', universities: [] },
  { id: 'germany', code: 'DE', name: 'Germany', region: 'Europe', status: 'ACTIVE', universities: [] },
  { id: 'new-zealand', code: 'NZ', name: 'New Zealand', region: 'Commonwealth', status: 'ACTIVE', universities: [] },
  { id: 'cyprus', code: 'CY', name: 'Cyprus', region: 'Europe', status: 'ACTIVE', universities: [] },
  { id: 'lithuania', code: 'LT', name: 'Lithuania', region: 'Europe', status: 'ACTIVE', universities: [] }
];

export const getCountries = async (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  try {
    const countries = await prisma.country.findMany({
      include: {
        universities: {
          include: {
            courses: true
          }
        }
      }
    });
    return res.json(countries.length > 0 ? countries : fallbackCountries);
  } catch (error) {
    // Return fallback catalog safely if DB is not configured locally
    return res.json(fallbackCountries);
  }
};

export const getCountryByIdOrCode = async (req: Request, res: Response) => {
  try {
    const identifier = String(req.params.identifier).toLowerCase();
    const country = await prisma.country.findFirst({
      where: {
        OR: [
          { id: identifier },
          { code: identifier.toUpperCase() }
        ]
      },
      include: {
        universities: {
          include: {
            courses: true
          }
        }
      }
    });
    if (country) {
      return res.json(country);
    }
    const fallback = fallbackCountries.find(
      c => c.id.toLowerCase() === identifier || c.code.toLowerCase() === identifier
    );
    if (fallback) {
      return res.json(fallback);
    }
    return res.status(404).json({ error: 'Country not found' });
  } catch (error) {
    const identifier = String(req.params.identifier).toLowerCase();
    const fallback = fallbackCountries.find(
      c => c.id.toLowerCase() === identifier || c.code.toLowerCase() === identifier
    );
    if (fallback) {
      return res.json(fallback);
    }
    return res.status(404).json({ error: 'Country not found' });
  }
};

export const getUniversities = async (req: Request, res: Response) => {
  try {
    const universities = await prisma.university.findMany({
      include: { courses: true }
    });
    return res.json(universities);
  } catch (error) {
    return res.json([]);
  }
};

export const getCourses = async (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'public, max-age=600');
  try {
    const { search, country, degreeLevel, budgetMax, page, pageSize } = req.query;

    const where: any = {};

    if (search && typeof search === 'string' && search.trim()) {
      where.name = { contains: search.trim(), mode: 'insensitive' };
    }

    if (country && typeof country === 'string' && country.trim()) {
      where.university = {
        ...where.university,
        country: {
          OR: [
            { name: { contains: country.trim(), mode: 'insensitive' } },
            { code: { equals: country.trim().toUpperCase() } }
          ]
        }
      };
    }

    if (degreeLevel && typeof degreeLevel === 'string' && degreeLevel.trim()) {
      where.degreeLevel = { equals: degreeLevel.trim(), mode: 'insensitive' };
    }

    if (budgetMax && !isNaN(parseFloat(String(budgetMax)))) {
      where.tuitionFee = { lte: parseFloat(String(budgetMax)) };
    }

    if (page) {
      const pageNum = Math.max(1, parseInt(String(page), 10) || 1);
      const pageSizeNum = Math.min(100, Math.max(1, parseInt(String(pageSize || '20'), 10) || 20));
      const skip = (pageNum - 1) * pageSizeNum;

      const [courses, total] = await Promise.all([
        prisma.course.findMany({
          where,
          skip,
          take: pageSizeNum,
          include: {
            university: {
              include: {
                country: true
              }
            }
          }
        }),
        prisma.course.count({ where })
      ]);

      return res.json({
        courses,
        total,
        page: pageNum,
        pageSize: pageSizeNum,
        totalPages: Math.ceil(total / pageSizeNum)
      });
    }

    const courses = await prisma.course.findMany({
      where,
      take: 200,
      include: {
        university: {
          include: {
            country: true
          }
        }
      }
    });

    return res.json(courses);
  } catch (error) {
    return res.json([]);
  }
};
