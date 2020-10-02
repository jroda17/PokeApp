import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Text,
} from 'react-native';
import {Input} from 'react-native-elements'
import {TouchableOpacity} from 'react-native-gesture-handler';
import PokemonDiv from '../components/pokemon.js';
import { connect } from 'react-redux';


function HomeScreen({navigation, route,pokemon}) {
  const [inputText, setInputText] = React.useState('');
  const [filteredPokemon, setFilteredPokemon] = React.useState();

  React.useEffect(() => {
    if (inputText !== '') {
      let poke = pokemon.data.filter((poke) => {
        return poke.name.includes(inputText.toLowerCase());
      })
     setFilteredPokemon(poke);
    } else {
      setFilteredPokemon();
    }
  }, [inputText]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Display', item)}
        style={{marginVertical: 10}}>
        <PokemonDiv itemName={item.name} />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.body}>
        <View style={styles.inputView}>
          <Input
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            style={styles.input}
            label={'Busca tu pokémon'}
            placeholderTextColor={'#3c3c3c'}
            inputStyle={{color:'white'}}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.resultText}>Resultados de la búsqueda</Text>
        </View>
        <View style={styles.viewList}>
          <FlatList
            initialNumToRender={10}
            data={filteredPokemon}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};


export default connect(mapStateToProps, null)(HomeScreen);

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    height: '100%',
  },
  input:{
    height:20
  },
  inputView: {
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
    marginVertical:10
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  viewList: {
    paddingHorizontal: -10,
  },
  textView: {
    paddingHorizontal: 10,
    marginVertical: 25,
  },
});
