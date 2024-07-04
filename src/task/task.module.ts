import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';
import { TaskSchema } from 'src/schemas/task.schema';
import { AuthModule } from 'src/auth/auth.module';
import TaskController from './task.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'task', schema: TaskSchema }]),
    AuthModule,
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
