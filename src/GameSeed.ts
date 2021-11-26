import { GameEntity, ScoreMetric } from './entities/game.entity';

export async function SeedGameEntities() {
  const games = await GameEntity.find();

  if (games.length === 0) {
    const entities = await GameEntity.create([
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

    await GameEntity.save(entities);

    console.log(`Games created`);
  }

  console.log(
    `************************\n*** REGISTERED GAMES *** \n************************\n` +
      games.map((game) => ' ' + game.name.toUpperCase() + '') +
      `\n----------------------`,
  );
}
