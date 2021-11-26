import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GameEntity } from './game.entity';

@Entity('game_result')
export class GameResultEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: string;

  @ManyToOne(() => GameEntity, (gameEntity) => gameEntity.results)
  game: GameEntity;
}
