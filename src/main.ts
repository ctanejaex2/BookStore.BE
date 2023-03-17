import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { TransformInterceptor } from './shared/interceptors/transorm-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false, transform: true }));
  app.setGlobalPrefix('/api');
  createSwagger(app);
  await app.listen(3000);
}

function createSwagger(app: INestApplication) {
  const SWAGGER_TITLE = 'Customer Management Service APIs';
  const SWAGGER_DESCRIPTION = 'Backend of NU: Customer Management';
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
bootstrap();
