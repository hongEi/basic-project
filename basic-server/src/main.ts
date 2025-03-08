import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS 활성화  
  await app.listen(3001); // 포트 3000 -> 3001
  console.log(`Server running on http://localhost:3001`);
}
bootstrap();