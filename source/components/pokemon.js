import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


export default function PokemonDiv(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/pokeball.png')} style={styles.pokeball}/>
      <Text style={styles.text}>{capitalizeFirstLetter(props.itemName)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingHorizontal: 15,
    width: '100%',
    display:"flex",
    flexDirection:"row"
  },
  text: {
    color: 'white',
    fontSize:18
  },
  pokeball:{height:25, width:25, marginRight:10}
});
