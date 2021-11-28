import { Module } from '@nestjs/common';
import { GameResultService } from './game-result.service';
import { GameResultResolver } from './game-result.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResultEntity } from './entities/game-result.entity';
import { PlayerModule } from 'src/player/player.module';
import { GameModule } from 'src/game/game.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameResultEntity]),
    GameModule,
    PlayerModule,
  ],
  providers: [GameResultResolver, GameResultService],
})
export class GameResultModule {}
