import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true, // Throw an error if params are passed that are not part of the DTO
      whitelist: true, // Automatically strip out params that don't adhere to the DTO
      transform: true // automatically convert req body to instance of DTO classes
    }),
  );
  await app.listen(5000);
}
bootstrap();
