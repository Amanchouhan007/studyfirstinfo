declare module 'multer' {
  import { RequestHandler } from 'express';

  interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination?: string;
    filename?: string;
    path?: string;
    buffer: Buffer;
  }

  interface Options {
    dest?: string;
    storage?: any;
    limits?: {
      fieldNameSize?: number;
      fieldSize?: number;
      fields?: number;
      fileSize?: number;
      files?: number;
      parts?: number;
      headerPairs?: number;
    };
    fileFilter?: (req: any, file: MulterFile, cb: (error: Error | null, acceptFile?: boolean) => void) => void;
  }

  interface Instance {
    single(fieldName: string): RequestHandler;
    array(fieldName: string, maxCount?: number): RequestHandler;
    fields(fields: Array<{ name: string; maxCount?: number }>): RequestHandler;
    none(): RequestHandler;
    any(): RequestHandler;
  }

  function multer(options?: Options): Instance;

  namespace multer {
    function memoryStorage(): any;
    function diskStorage(options: any): any;
  }

  export = multer;
}
