import {AxiosDefault} from './RestClient';

const get = async (url, params) => {
  try {
    const response = await AxiosDefault.get(url, params);
    if (response.status >= 400) {
      throw (response.statusText, response.status);
    }
    return response.data;
  } catch (error) {
    throw error
  }
};

export const getPokemon = async () => {
  const pokemon = await get('pokemon?limit=2000');
  return pokemon.results;
};

export const getPokemonDetail = async (name) => {
  const pokemonData = await get('pokemon/'+name);
  return pokemonData;
};

