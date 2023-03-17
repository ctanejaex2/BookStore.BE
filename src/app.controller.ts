import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    const message = this.appService.getHello();
    return { data: message, statusCode: HttpStatus.OK };
  }
  @Get('/db')
  getDbHealthStatus() {
    const isDbConnected = this.appService.getHealthStatus();
    return (isDbConnected ? { data: 'Database connected', statusCode: HttpStatus.OK } : { data: 'Unable to connect to database', statusCode: HttpStatus.OK });
  }
}
