import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PlayerEntity } from 'src/player/entities/player.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GameEntity } from '../../game/entities/game.entity';

@Entity('game_result')
@ObjectType()
export class GameResultEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  score: string;

  @ManyToOne(() => GameEntity, (gameEntity) => gameEntity.results)
  @Field(() => GameEntity)
  game: GameEntity;

  @Column()
  @Field(() => Int)
  gameId: number;

  @ManyToOne(() => PlayerEntity, (playerEntity) => playerEntity.results)
  @Field(() => PlayerEntity)
  player: PlayerEntity;

  @Column()
  @Field(() => Int)
  playerId: number;
}
