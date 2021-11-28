import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GameResultCreateDTO {
  @Field()
  score: string;

  @Field(() => Int)
  gameId: number;

  @Field(() => Int)
  playerId: number;
}
