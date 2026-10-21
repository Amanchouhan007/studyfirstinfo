/**
 * Lightweight safe logger helper.
 * Redacts sensitive credentials, passwords, tokens, and binary contents.
 */

const REDACTED_KEYS = new Set([
  'password',
  'token',
  'jwt',
  'secret',
  'trxid',
  'authorization',
  'nidorpassport',
  'cookie',
  'auth_token'
]);

function sanitize(data: any): any {
  if (data === null || data === undefined) return data;
  if (typeof data !== 'object') return data;
  if (Buffer.isBuffer(data)) return '[Binary Buffer]';

  if (Array.isArray(data)) {
    return data.map(sanitize);
  }

  const cleanObj: Record<string, any> = {};
  for (const [key, value] of Object.entries(data)) {
    if (REDACTED_KEYS.has(key.toLowerCase())) {
      cleanObj[key] = '[REDACTED]';
    } else if (typeof value === 'object') {
      cleanObj[key] = sanitize(value);
    } else {
      cleanObj[key] = value;
    }
  }
  return cleanObj;
}

export const logger = {
  info: (message: string, meta?: any) => {
    if (meta) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`, JSON.stringify(sanitize(meta)));
    } else {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }
  },
  warn: (message: string, meta?: any) => {
    if (meta) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, JSON.stringify(sanitize(meta)));
    } else {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }
  },
  error: (message: string, error?: any) => {
    if (error instanceof Error) {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}: ${error.message}`);
      if (process.env.NODE_ENV !== 'production' && error.stack) {
        console.error(error.stack);
      }
    } else if (error) {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, JSON.stringify(sanitize(error)));
    } else {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }
  }
};
