import { Field, Int, ObjectType } from '@nestjs/graphql';
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
@ObjectType('player')
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  userName: string;

  @Column({ default: 0 })
  @Field(() => Int, { defaultValue: 0 })
  totalScore: number;

  @Column({ type: 'enum', enum: Level, default: Level.NOOB })
  @Field({ defaultValue: Level.NOOB })
  profileLevel: Level;

  @OneToMany(
    () => GameResultEntity,
    (gameResultEntity) => gameResultEntity.player,
  )
  @Field(() => [GameResultEntity], { nullable: true })
  results: GameResultEntity[];
}
