import { Field, InputType } from '@nestjs/graphql';
import { Level } from '../entities/player.entity';

@InputType()
export class PlayerCreateDTO {
  @Field()
  name: string;

  @Field()
  userName: string;

  @Field({ defaultValue: 0 })
  totalScore: number;

  @Field({ defaultValue: Level.NOOB })
  profileLevel: Level;
}
