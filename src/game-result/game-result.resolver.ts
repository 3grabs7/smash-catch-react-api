import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { GameResultService } from './game-result.service';
import { GameResultEntity } from 'src/game-result/entities/game-result.entity';
import { GameResultCreateDTO } from 'src/game-result/dtos/create-game-result.input';
import { GameEntity } from 'src/game/entities/game.entity';
import { PlayerEntity } from 'src/player/entities/player.entity';

@Resolver(() => GameResultEntity)
export class GameResultResolver {
  constructor(private readonly gameResultService: GameResultService) {}

  @Query(() => [GameResultEntity])
  getAllGameResults() {
    return this.gameResultService.findAllResults();
  }

  @Query(() => GameResultEntity)
  getOneGameResult(@Args('id') id: number) {
    return this.gameResultService.findOneResult(id);
  }

  @Mutation(() => GameResultEntity)
  createGameResult(@Args('gameResult') gameResult: GameResultCreateDTO) {
    return this.gameResultService.createGameResult(gameResult);
  }

  @ResolveField(() => PlayerEntity)
  player(@Parent() id: number) {
    return this.gameResultService.getPlayer(id);
  }

  @ResolveField(() => GameEntity)
  game(@Parent() id: number) {
    return this.gameResultService.getGame(id);
  }
}
