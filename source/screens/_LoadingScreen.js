import React from 'react';
import {fetchPokemon} from '../redux/actions/pokemon';
import {connect} from 'react-redux';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

function LoadingScreen({pokemon, fetchPokemon}) {

  React.useEffect(() =>{
    const loadPokemon = () =>{
        fetchPokemon()
    }
    loadPokemon()
  })

  return (
    <View style={styles.body}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: () => {
      return dispatch(fetchPokemon());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
