import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'https://task-tracker-frontend-sandy.vercel.app',
    'http://localhost:8080',
    'http://localhost:8000',
    'http://localhost:3000',
    'http://localhost:5173',
  ];

  const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };

  // Enable CORS with options
  app.enableCors(corsOptions);

  // Handle preflight requests explicitly
  app.use((req: Request, res: Response, next: Function) => {
    res.header('Access-Control-Allow-Origin', allowedOrigins.join(', '));
    res.header('Access-Control-Allow-Methods', corsOptions.methods);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    res.header(
      'Access-Control-Allow-Credentials',
      corsOptions.credentials.toString(),
    );

    if (req.method === 'OPTIONS') {
      res.status(200).send();
    } else {
      next();
    }
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
