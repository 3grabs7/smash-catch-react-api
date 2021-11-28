import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { PlayerEntity } from 'src/player/entities/player.entity';
import { PlayerService } from 'src/player/player.service';
import { Repository } from 'typeorm';
import { GameResultCreateDTO } from '../game-result/dtos/create-game-result.input';
import { GameCreateDTO } from './dtos/create-game.input';
import { GameResultEntity } from '../game-result/entities/game-result.entity';
import { GameEntity } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
  ) {}

  findOneGame(id: number): Observable<GameEntity> {
    return from(this.gameRepository.findOne(id, { relations: ['results'] }));
  }

  findAllGames(): Observable<GameEntity[]> {
    return from(this.gameRepository.find({ relations: ['results'] }));
  }

  createGame(game: GameCreateDTO): Observable<GameEntity> {
    const gameEntity = this.gameRepository.create(game);
    return from(this.gameRepository.save(gameEntity));
  }
}
