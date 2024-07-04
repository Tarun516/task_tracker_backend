import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
    Req
  } from '@nestjs/common';
  import { TaskService } from './task.service';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('task')
  export default class TaskController {
    constructor(private taskService: TaskService) { }
  
    @Get()
    @UseGuards(AuthGuard())
    async getTasks(@Req() req) {
      return await this.taskService.getTasks(req.user);
    }
  
    @Post()
    @UseGuards(AuthGuard())
    async create(@Body('name') taskName: string, @Req() req) {
      return await this.taskService.create(taskName, req.user);
    }
  
    @Patch('/:taskId')
    @UseGuards(AuthGuard())
    async updateStatus(@Req() req, @Param() param: { taskId: number }) {
      return await this.taskService.updateStatus(req.user, param);
    }

    
  }