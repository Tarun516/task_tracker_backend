import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  Injectable,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { NestMiddleware } from '@nestjs/common/interfaces/middleware';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.header(
      'Access-Control-Allow-Origin',
      'https://task-tracker-frontend-sandy.vercel.app',
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    res.header('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      res.status(200).send();
    } else {
      next();
    }
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://TT_516:TT_User@tt.puerwqy.mongodb.net/?retryWrites=true&w=majority&appName=TT',
    ),
    TaskModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
