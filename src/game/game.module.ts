import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { GameResultEntity } from '../game-result/entities/game-result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './entities/game.entity';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  providers: [GameService, GameResolver],
  exports: [GameService],
})
export class GameModule {}
