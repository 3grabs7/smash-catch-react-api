import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GameResultEntity } from 'src/game-result/entities/game-result.entity';
import { PlayerCreateDTO } from './dtos/create-player.input';
import { PlayerEntity } from './entities/player.entity';
import { PlayerService } from './player.service';

@Resolver(() => PlayerEntity)
export class PlayerResolver {
  constructor(private playerService: PlayerService) {}

  @Query(() => [PlayerEntity])
  getAllPlayers() {
    return this.playerService.findAll();
  }

  @Query(() => PlayerEntity)
  getOnePlayer(@Args('id') id: number) {
    return this.playerService.findOne(id);
  }

  @Mutation(() => PlayerEntity)
  createPlayer(@Args('player') player: PlayerCreateDTO) {
    return this.playerService.create(player);
  }
}
