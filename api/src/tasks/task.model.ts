import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ObjectType, Int, Field } from '@nestjs/graphql';

@Table
@ObjectType()
export class Task extends Model {
  @Field((type) => Int)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @Field()
  title: string;

  @Column
  @Field()
  description: string;

  @Column({ defaultValue: false })
  @Field()
  isCompleted: boolean;
}
