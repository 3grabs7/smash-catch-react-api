import { PlayerEntity } from 'src/player/entities/player.entity';
import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GameEntity } from '../../game/entities/game.entity';

@Entity('game_result')
export class GameResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: string;

  @ManyToOne(() => GameEntity, (gameEntity) => gameEntity.results)
  game: GameEntity;


  @ManyToOne(() => PlayerEntity, (playerEntity) => playerEntity.results)
  player: PlayerEntity;

}
