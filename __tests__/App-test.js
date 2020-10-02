import React from 'react';
import {getPokemonDetail} from '../source/services/Pokemon';
import ImagePoke from '../source/components/ImagePoke';
import 'react-native-gesture-handler/jestSetup';
import renderer from 'react-test-renderer';

test('check if you get the data with bulbasaur search,if not found, catch', async () => {
  try{
  const data = await getPokemonDetail('bulbasaur');
  //const data = await getPokemonDetail('asd');
  expect(data.base_experience).toBe(64);
  }catch(e){
    expect(e.response.statusText).toBe("Not Found")
  }
});

test('Check if image renders', () => {
  const navigation = {
    state: { params: {} },
    dispatch: jest.fn(),
    goBack: jest.fn()
  }
  //const props = {}
  const props = {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,};
  expect(renderer.create(<ImagePoke data={props} navigation={navigation}/>));
});