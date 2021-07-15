import { IsNotEmpty } from 'class-validator';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class MarkTaskAsCompleteInput {
  @Field((type) => Int)
  @IsNotEmpty()
  taskId: number;
}
