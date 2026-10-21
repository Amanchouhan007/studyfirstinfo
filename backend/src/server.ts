import app from './app';
import { validateEncryptionKey } from './utils/crypto';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 5000;

// Validate critical environment variables before opening listeners
const validateEnv = () => {
  const missing: string[] = [];

  if (!process.env.DATABASE_URL) {
    missing.push('DATABASE_URL');
  }

  if (!process.env.JWT_SECRET) {
    missing.push('JWT_SECRET');
  }

  const isProd = process.env.NODE_ENV === 'production';

  if (isProd && !process.env.CLIENT_URL) {
    missing.push('CLIENT_URL (required in production)');
  }

  const encKey = process.env.PROFILE_ENC_KEY;
  if (isProd) {
    if (!encKey || !validateEncryptionKey(encKey)) {
      missing.push('PROFILE_ENC_KEY (must be 64-character hex string in production)');
    }
  } else {
    if (encKey && !validateEncryptionKey(encKey)) {
      logger.warn('PROFILE_ENC_KEY is provided but is not a 64-character hex string. Encryption will be skipped in development.');
    } else if (!encKey) {
      logger.warn('PROFILE_ENC_KEY is not set. Profile NID/Passport encryption will be skipped in development mode.');
    }
  }

  if (missing.length > 0) {
    console.error(`\n❌ FATAL: Backend startup refused due to missing/invalid environment variables:\n   - ${missing.join('\n   - ')}\n`);
    process.exit(1);
  }
};

validateEnv();

const startServer = () => {
  app.listen(PORT, () => {
    logger.info(`Study First Info Backend API started successfully on port ${PORT}`);
  });
};

startServer();
