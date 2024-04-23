import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:data')
  getHello(@Param('data') data: string): string {
    return this.appService.getQR(data);
  }
}
