import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS 활성화
  app.useGlobalPipes(new ValidationPipe()); // 유효성 검사 활성화
  await app.listen(3001); // 포트 3000 -> 3001
  console.log(`Server running on http://localhost:3001`);
}
bootstrap();
