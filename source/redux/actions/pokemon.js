import {USER} from '../constants/actionTypes';
import {getPokemon} from '../../services/Pokemon'

export const getData = () => {
  console.log('haciendo USER.FETCHING_DATA');
  return {type: USER.FETCHING_DATA};
};

export const getDataSuccess = (data) => {
  console.log('haciendo USER.FETCHING_DATA_SUCCESS');
  //const jsonValue = JSON.stringify(data)
  return {type: USER.FETCHING_DATA_SUCCESS, payload: data};
};

export const getDataFailure = error => {
  console.log('haciendo USER.FETCHING_DATA_FAILURE');
  return {type: USER.FETCHING_DATA_FAILURE, payload: error};
};

export const fetchPokemon = () => {
  return dispatch => {
    //dispatch(getPokemon());
    getPokemon()
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch(reason => {
        console.log(reason);
        dispatch(getDataFailure('Error'));
      });
  };
};

export const fetchPokemonData = () => {
  return dispatch => {
    dispatch(getData());
    console.log("getMe");
    pokeService.getPokemon()
      .then(({data}) => {
        console.log(data)
        dispatch(getDataSuccess(data.user));
      })
      .catch(reason => {
        console.log(reason);
        dispatch(getDataFailure('Error'));
      });
  };
};