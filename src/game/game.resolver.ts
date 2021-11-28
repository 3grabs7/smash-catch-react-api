import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PlayerEntity } from 'src/player/entities/player.entity';
import { GameResultCreateDTO } from '../game-result/dtos/create-game-result.input';
import { GameCreateDTO } from './dtos/create-game.input';
import { GameResultEntity } from '../game-result/entities/game-result.entity';
import { GameEntity } from './entities/game.entity';
import { GameService } from './game.service';
import { GameResultService } from 'src/game-result/game-result.service';

@Resolver(() => GameEntity)
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query(() => [GameEntity])
  getAllGames() {
    return this.gameService.findAllGames();
  }

  @Query(() => GameEntity)
  getOneGame(@Args('id') id: number) {
    return this.gameService.findOneGame(id);
  }

  @Mutation(() => GameEntity)
  createGame(@Args('game') game: GameCreateDTO) {
    return this.gameService.createGame(game);
  }
}
