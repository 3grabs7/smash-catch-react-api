import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  BaseEntity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GameResultEntity } from '../../game-result/entities/game-result.entity';

export enum ScoreMetric {
  POINTS = 'Points',
  MS = 'ms',
}

@Entity('game')
@ObjectType('game')
export class GameEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({
    type: 'enum',
    enum: ScoreMetric,
    default: ScoreMetric.POINTS,
  })
  @Field()
  scoreMetric: ScoreMetric;

  @OneToMany(
    () => GameResultEntity,
    (gameResultEntity) => gameResultEntity.game,
  )
  @Field(() => [GameResultEntity], { nullable: true })
  results: GameResultEntity[];
}
