import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskInput } from './dto/create-task.input';
import { MarkTaskAsCompleteInput } from './dto/mark-task-as-complete.input';
import { RemoveTaskInput } from './dto/remove-task.input';
import { EventsGateway } from './events/events.gateway';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
    private eventGateWay: EventsGateway
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const task = new Task();
    task.title = createTaskInput.title;
    task.description = createTaskInput.description;
    
    const taskAdded = await task.save();
    this.eventGateWay.server.emit('newTodoTaskAdded', taskAdded)
    return taskAdded;
  }

  async markTaskAsComplete(
    markTaskAsComplete: MarkTaskAsCompleteInput,
  ): Promise<Task> {
    const task = await this.findOneTask(markTaskAsComplete.taskId);
    task.isCompleted = true;
    await task.save();
    this.eventGateWay.server.emit('todoTaskMarkAsCompleted', task)
    return task;
  }

  async removeTask(removeTaskData: RemoveTaskInput): Promise<Task> {
    const task = await this.findOneTask(removeTaskData.taskId);
    await task.destroy();
    this.eventGateWay.server.emit('todoTaskRemoved', task)
    return task;
  }

  async findOneTask(id: number): Promise<Task> {
    return this.taskModel.findByPk(id);
  }
}
