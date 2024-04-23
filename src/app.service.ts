import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
  getQR(data: string): string {
    return QRCode.toDataURL(data);
  }
}
