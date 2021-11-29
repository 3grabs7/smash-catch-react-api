import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedGameEntities } from './GameSeed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await SeedGameEntities();

  await app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
  });
}
bootstrap();
