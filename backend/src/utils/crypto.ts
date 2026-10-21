import crypto from 'crypto';
import { logger } from './logger';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12; // 96 bits for GCM

/**
 * Validates that the encryption key is exactly a 64-character hex string (32 bytes = 256 bits).
 */
export function validateEncryptionKey(key?: string): boolean {
  if (!key) return false;
  return /^[0-9a-fA-F]{64}$/.test(key);
}

/**
 * Encrypts a string at rest using AES-256-GCM.
 * Format: enc:<iv-hex>:<authTag-hex>:<encrypted-hex>
 */
export function encryptText(plainText: string | null | undefined): string | null {
  if (plainText === null || plainText === undefined || plainText === '') {
    return null;
  }

  const encKeyHex = process.env.PROFILE_ENC_KEY;
  if (!validateEncryptionKey(encKeyHex)) {
    // If key not configured or invalid in development, store plain
    return plainText;
  }

  try {
    const key = Buffer.from(encKeyHex!, 'hex');
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

    let encrypted = cipher.update(plainText, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');

    return `enc:${iv.toString('hex')}:${authTag}:${encrypted}`;
  } catch (err) {
    logger.error('Failed to encrypt text with AES-256-GCM', err);
    return plainText;
  }
}

/**
 * Decrypts a string previously encrypted with AES-256-GCM.
 */
export function decryptText(cipherText: string | null | undefined): string | null {
  if (!cipherText) return null;
  if (!cipherText.startsWith('enc:')) {
    return cipherText;
  }

  const encKeyHex = process.env.PROFILE_ENC_KEY;
  if (!validateEncryptionKey(encKeyHex)) {
    logger.warn('PROFILE_ENC_KEY missing or invalid; cannot decrypt encrypted field');
    return '[Encrypted Data - Key Missing]';
  }

  try {
    const parts = cipherText.split(':');
    if (parts.length !== 4) return cipherText;

    const [, ivHex, authTagHex, encryptedHex] = parts;
    const key = Buffer.from(encKeyHex!, 'hex');
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');

    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (err) {
    logger.error('Failed to decrypt AES-256-GCM encrypted field', err);
    return '[Decryption Failed]';
  }
}
