import { GameResultEntity } from 'src/game-result/entities/game-result.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum Level {
  NOOB = 'n00b',
  BEGINNER = 'Beginner',
  PATRON = 'Patron',
  NERD = 'Nerd',
  CSHARP = 'C#',
}

@Entity('player')
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  userName: string;

  @Column({ default: 0 })
  totalScore: number;

  @Column({ type: 'enum', enum: Level, default: Level.NOOB })
  profileLevel: Level;

  @OneToMany(
    () => GameResultEntity,
    (gameResultEntity) => gameResultEntity.player,
  )
  results: GameResultEntity[];
}
