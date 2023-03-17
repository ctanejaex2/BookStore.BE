import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger/dist';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({ summary: 'get server health status' })
  getHello() {
    const message = this.appService.getHello();
    return { data: message, statusCode: HttpStatus.OK };
  }
  @Get('/db')
  @ApiOperation({ summary: 'get db connection status' })
  getDbHealthStatus() {
    const isDbConnected = this.appService.getHealthStatus();
    return (isDbConnected ? { data: 'Database connected', statusCode: HttpStatus.OK } : { data: 'Unable to connect to database', statusCode: HttpStatus.OK });
  }
}
