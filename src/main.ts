import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { TransformInterceptor } from './shared/interceptors/transorm-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false, transform: true }));
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
