import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { GameModule } from './game/game.module';
import { join } from 'path';
import { GameResultModule } from './game-result/game-result.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      // uncomment for better insight into typeorm generated SQL
      // logging: true,
    }),
    PlayerModule,
    GameModule,
    GameResultModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
