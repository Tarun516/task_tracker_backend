import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://TT_516:TT_User@tt.puerwqy.mongodb.net/?retryWrites=true&w=majority&appName=TT'),
    TaskModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
