import { getRepository, Repository } from 'typeorm';
import { GameEntity, ScoreMetric } from './game/entities/game.entity';

export async function SeedGameEntities() {
  const repository: Repository<GameEntity> = getRepository(GameEntity);
  const games = await repository.find();

  if (games.length === 0) {
    const entities = await repository.create([
      {
        name: 'smash',
        scoreMetric: ScoreMetric.POINTS,
      },
      {
        name: 'catch',
        scoreMetric: ScoreMetric.POINTS,
      },
      {
        name: 'react',
        scoreMetric: ScoreMetric.MS,
      },
    ]);

    await repository.save(entities);

    console.log(`Games created`);
  }

  console.log(
    `************************\n*** REGISTERED GAMES *** \n************************\n` +
      games.map((game) => ' ' + game.name.toUpperCase() + '') +
      `\n----------------------`,
  );
}
