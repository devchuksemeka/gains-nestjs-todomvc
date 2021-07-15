import { IsNotEmpty } from 'class-validator';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class RemoveTaskInput {
  @Field((type) => Int)
  @IsNotEmpty()
  taskId: number;
}
