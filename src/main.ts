import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedGameEntities } from './GameSeed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await SeedGameEntities();

  await app.listen(process.env.PORT);
}
bootstrap();
