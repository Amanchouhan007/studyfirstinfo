import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { 
  S3Client, 
  PutObjectCommand, 
  GetObjectCommand, 
  DeleteObjectCommand 
} from '@aws-sdk/client-s3';
import { logger } from '../utils/logger';

export interface StorageDriver {
  saveFile(fileKey: string, buffer: Buffer, mimeType: string): Promise<string>;
  getFileStream(fileKey: string): Promise<{ stream: Readable; contentLength?: number }>;
  deleteFile(fileKey: string): Promise<void>;
}

/**
 * Local Disk Storage Driver (default for development/offline)
 */
export class LocalStorageDriver implements StorageDriver {
  private uploadDir: string;

  constructor(uploadDir?: string) {
    this.uploadDir = uploadDir || path.resolve(__dirname, '../../uploads');
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async saveFile(fileKey: string, buffer: Buffer): Promise<string> {
    const filePath = path.join(this.uploadDir, fileKey);
    await fs.promises.writeFile(filePath, buffer);
    return fileKey;
  }

  async getFileStream(fileKey: string): Promise<{ stream: Readable; contentLength?: number }> {
    const filePath = path.join(this.uploadDir, fileKey);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${fileKey}`);
    }
    const stat = await fs.promises.stat(filePath);
    const stream = fs.createReadStream(filePath);
    return { stream, contentLength: stat.size };
  }

  async deleteFile(fileKey: string): Promise<void> {
    const filePath = path.join(this.uploadDir, fileKey);
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
    }
  }
}

/**
 * S3 / Cloudflare R2 Compatible Storage Driver
 */
export class S3StorageDriver implements StorageDriver {
  private client: S3Client;
  private bucket: string;

  constructor() {
    this.bucket = process.env.S3_BUCKET!;
    const endpoint = process.env.S3_ENDPOINT;
    const region = process.env.S3_REGION || 'auto';

    this.client = new S3Client({
      region,
      endpoint: endpoint || undefined,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!
      },
      forcePathStyle: true
    });
  }

  async saveFile(fileKey: string, buffer: Buffer, mimeType: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: fileKey,
      Body: buffer,
      ContentType: mimeType
    });
    await this.client.send(command);
    return fileKey;
  }

  async getFileStream(fileKey: string): Promise<{ stream: Readable; contentLength?: number }> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: fileKey
    });
    const response = await this.client.send(command);
    if (!response.Body) {
      throw new Error(`Empty body returned for S3 object: ${fileKey}`);
    }
    return {
      stream: response.Body as Readable,
      contentLength: response.ContentLength
    };
  }

  async deleteFile(fileKey: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: fileKey
    });
    await this.client.send(command);
  }
}

function resolveStorageDriver(): StorageDriver {
  const isS3Configured = Boolean(
    process.env.S3_BUCKET &&
    process.env.S3_ACCESS_KEY_ID &&
    process.env.S3_SECRET_ACCESS_KEY
  );

  if (isS3Configured) {
    logger.info('Using S3StorageDriver for private document storage');
    return new S3StorageDriver();
  }

  logger.info('S3 variables absent; using LocalStorageDriver (backend/uploads)');
  return new LocalStorageDriver();
}

export const storageService = resolveStorageDriver();
