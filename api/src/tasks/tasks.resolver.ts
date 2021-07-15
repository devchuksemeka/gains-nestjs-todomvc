import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskInput } from './dto/create-task.input';
import { MarkTaskAsCompleteInput } from './dto/mark-task-as-complete.input';
import { RemoveTaskInput } from './dto/remove-task.input';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private tasksService: TasksService) {}

  @Query((returns) => [Task])
  async tasks() {
    return this.tasksService.findAll();
  }
  @Mutation((returns) => Task)
  async createTask(
    @Args('createNewTaskData') createNewTaskData: CreateTaskInput,
  ): Promise<Task> {
    return this.tasksService.createTask(createNewTaskData);
  }

  @Mutation((returns) => Task)
  async markTaskAsComplete(
    @Args('markTaskAsCompleteData')
    markTaskAsCompleteData: MarkTaskAsCompleteInput,
  ): Promise<Task> {
    return this.tasksService.markTaskAsComplete(markTaskAsCompleteData);
  }

  @Mutation((returns) => Task)
  async removeTask(
    @Args('removeTaskData') removeTaskData: RemoveTaskInput,
  ): Promise<Task> {
    return this.tasksService.removeTask(removeTaskData);
  }
}
