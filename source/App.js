import React from 'react';
import 'react-native-gesture-handler';
import HomeStack from './navigation/Stacks/index';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import LoadingScreen from './screens/_LoadingScreen';

function App({pokemon}) {

  return (
    <NavigationContainer>
      {pokemon.data !== null ? <HomeStack /> : 
      <LoadingScreen/>}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};


export default connect(mapStateToProps, null)(App);
