import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('FATAL: JWT_SECRET environment variable is missing.');
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.auth_token;
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string, role: string };
    (req as any).userId = decoded.userId;
    (req as any).role = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

export const requireRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = (req as any).role;
    if (!role) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    if (!roles.includes(role)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
    }
    next();
  };
};

export const optionalAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.auth_token;
  if (!token) {
    return next();
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string, role: string };
    (req as any).userId = decoded.userId;
    (req as any).role = decoded.role;
  } catch (error) {
    // Ignore invalid tokens for optional auth
  }
  next();
};
