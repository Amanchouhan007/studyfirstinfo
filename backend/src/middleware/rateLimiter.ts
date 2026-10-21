import rateLimit from 'express-rate-limit';

/**
 * General API Rate Limiter
 * 300 requests per 15 minutes per IP
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests to API from this IP, please try again after 15 minutes.'
  }
});

/**
 * Authentication Endpoints Rate Limiter (Login, Register)
 * 10 requests per 15 minutes per IP
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many authentication attempts from this IP, please try again after 15 minutes.'
  }
});

/**
 * Lead Capture & Public Evaluation Limiter
 * 20 requests per hour per IP
 */
export const leadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many submissions from this IP, please try again after 1 hour.'
  }
});
