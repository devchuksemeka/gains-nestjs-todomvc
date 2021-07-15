import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskInput } from './dto/create-task.input';
import { MarkTaskAsCompleteInput } from './dto/mark-task-as-complete.input';
import { RemoveTaskInput } from './dto/remove-task.input';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const task = new Task();
    task.title = createTaskInput.title;
    task.description = createTaskInput.description;

    return task.save();
  }

  async markTaskAsComplete(
    markTaskAsComplete: MarkTaskAsCompleteInput,
  ): Promise<Task> {
    const task = await this.findOneTask(markTaskAsComplete.taskId);
    task.isCompleted = true;
    await task.save();
    return task;
  }

  async removeTask(removeTaskData: RemoveTaskInput): Promise<Task> {
    const task = await this.findOneTask(removeTaskData.taskId);
    await task.destroy();
    return task;
  }

  async findOneTask(id: number): Promise<Task> {
    return this.taskModel.findByPk(id);
  }
}
