import { Injectable, HttpStatus } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { DataSource } from 'typeorm';
@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) { }
  getHello() {
    return 'Dont worry!!! I am up.';
  }

  getHealthStatus() {
    return this.dataSource.isInitialized;
  }
}
