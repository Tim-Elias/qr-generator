import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('qr')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('data') data: string): string {
    return this.appService.getQR(data);
  }
}
