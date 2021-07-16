import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { TaskResolver } from './tasks.resolver';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [],
  providers: [
    EventsGateway,
    TasksService,
    TaskResolver
  ],
})
export class TasksModule {}
