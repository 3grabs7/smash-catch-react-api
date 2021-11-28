import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { GameResultCreateDTO } from 'src/game-result/dtos/create-game-result.input';
import { GameResultEntity } from 'src/game-result/entities/game-result.entity';
import { GameEntity } from 'src/game/entities/game.entity';
import { GameService } from 'src/game/game.service';
import { PlayerEntity } from 'src/player/entities/player.entity';
import { PlayerService } from 'src/player/player.service';
import { Repository } from 'typeorm';

@Injectable()
export class GameResultService {
  constructor(
    @InjectRepository(GameResultEntity)
    private gameResultRepository: Repository<GameResultEntity>,
    private gameService: GameService,
    private playerService: PlayerService,
  ) {}

  findOneResult(id: number): Observable<GameResultEntity> {
    return from(this.gameResultRepository.findOne(id));
  }

  findAllResults(): Observable<GameResultEntity[]> {
    return from(this.gameResultRepository.find());
  }

  createGameResult(
    gameResult: GameResultCreateDTO,
  ): Observable<GameResultEntity> {
    const gameResultEntity = this.gameResultRepository.create(gameResult);
    return from(this.gameResultRepository.save(gameResultEntity));
  }

  getPlayer(id: number): Observable<PlayerEntity> {
    return from(this.playerService.findOne(id));
  }

  getGame(id: number): Observable<GameEntity> {
    return from(this.gameService.findOneGame(id));
  }
}
