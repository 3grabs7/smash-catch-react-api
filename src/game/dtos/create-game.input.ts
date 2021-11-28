import { Field, InputType } from '@nestjs/graphql';
import { ScoreMetric } from '../entities/game.entity';

@InputType()
export class GameCreateDTO {
  @Field()
  name: string;

  @Field({ defaultValue: ScoreMetric.POINTS })
  scoreMetric: ScoreMetric;
}
