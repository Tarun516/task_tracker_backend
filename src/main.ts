import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [
      'https://task-tracker-frontend-sandy.vercel.app/',
      'http://task-tracker-frontend-sandy.vercel.app/',
      'https://localhost:8080',
      'http://localhost:8080',
      'https://localhost:8000',
      'http://localhost:8000',
      'https://localhost:3000',
      'http://localhost:3000',,
      'http://localhost:5173'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
