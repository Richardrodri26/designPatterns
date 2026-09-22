import { Logger } from 'jsr:@deno-library/logger';
import {COLORS} from "../../helpers/colors.ts";

// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
  file: string;

  writeLog: (msg: string) => void;
  writeWarning: (msg: string) => void;
  writeError: (msg: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

  writeLog(msg: string) {
    this.logger.info(`[${this.file} Log] %c${msg}]`, COLORS.blue);
  }

  writeWarning(msg: string): void {
    this.logger.warn(`[${this.file} Warn] %c${msg}`, COLORS.yellow);
  }

  writeError(msg: string): void {
    this.logger.error(`[${this.file} Warn] %c${msg}`, COLORS.red);
  }
}

// const logger = new Logger();
//
// logger.info('[${this.file} Warn] %c${msg}`);')
// logger.warn('[${this.file} Warn] %c${msg}`);')
// logger.error('[${this.file} Warn] %c${msg}`);')