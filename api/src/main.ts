import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 4000;
  await app.listen(PORT, () => {
    Logger.log(
      `Application Running on port http://localhost:${PORT}`,
      'Bootstrap',
    );
  });
}
bootstrap();
