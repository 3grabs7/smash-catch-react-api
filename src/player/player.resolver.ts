import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
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

  @Query(() => PlayerEntity, { name: 'getPlayerById' })
  getOnePlayer(@Args('id') id: number) {
    return this.playerService.findOne(id);
  }

  @Query(() => PlayerEntity, { name: 'getPlayerByUsername' })
  getOnePlayerByUsername(@Args('username') username: string) {
    return this.playerService.findOneByUsername(username);
  }

  @Mutation(() => PlayerEntity)
  createPlayer(@Args('player') player: PlayerCreateDTO) {
    return this.playerService.create(player);
  }
}
