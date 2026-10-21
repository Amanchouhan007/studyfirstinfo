import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import apiRoutes from './routes';
import { generalLimiter } from './middleware/rateLimiter';

dotenv.config();

const app = express();

// Trust reverse proxy (Cloudflare / Nginx / hosting platforms) for accurate IP rate limiting
if (process.env.TRUST_PROXY !== undefined && process.env.TRUST_PROXY !== '') {
  app.set('trust proxy', parseInt(process.env.TRUST_PROXY, 10));
} else {
  app.set('trust proxy', false);
}

// Security headers
app.use(helmet());

// CORS configuration
const allowedOrigin = process.env.CLIENT_URL || process.env.VITE_APP_URL || 'http://localhost:5173';
app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// General rate limiter on /api (300 requests per 15 minutes)
app.use('/api', generalLimiter);

// Bind API Routes
app.use('/api', apiRoutes);

// Root health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;
