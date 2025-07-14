import { heroesCollection } from '../data';

const findHeroById = (heroId) => {
  if (!heroId) return;

  return heroesCollection.find(({ id }) => id === heroId);
};

export default findHeroById;
