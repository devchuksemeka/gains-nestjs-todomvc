import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'gains_db',
      synchronize: true,
      autoLoadModels: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // cors: {
      //   credentials: true,
      //   origin: 'http://localhost:3000',
      // },
      cors: true,
      context: ({req}) => {
        return {req};
      }
    }),
    TasksModule,
  ],
})
export class AppModule {}
