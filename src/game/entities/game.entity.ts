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
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ScoreMetric,
    default: ScoreMetric.POINTS,
  })
  scoreMetric: ScoreMetric;

  @OneToMany(
    () => GameResultEntity,
    (gameResultEntity) => gameResultEntity.game,
  )
  results: GameResultEntity[];
}
