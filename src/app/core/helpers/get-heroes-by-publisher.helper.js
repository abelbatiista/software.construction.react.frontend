import { heroesCollection } from '../data';

const getHeroesByPublisher = (heroPublisher) => {
  if (!heroPublisher) return;

  return heroesCollection.filter(
    ({ publisher }) => publisher === heroPublisher
  );
};

export default getHeroesByPublisher;
