import { heroesCollection } from '../data';

const getHeroesByCriteria = (criteria) => {
  if (!criteria) return heroesCollection;

  return heroesCollection.filter((item) => {
    return !!Object.keys(item).find((key) =>
      item[key].toLowerCase().trim().includes(criteria.toLowerCase().trim())
    );
  });
};

export default getHeroesByCriteria;
