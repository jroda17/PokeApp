import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ImagePoke from '../components/ImagePoke';
import {getPokemonDetail} from '../services/Pokemon';

export default function DetailScreen({navigation, route}) {
  const [pokeData, setPokeData] = React.useState();
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: capitalizeFirstLetter(route.params.name),
    });
  }, [navigation]);

  React.useEffect(() => {
    let mounted = true
    const getPokemonData = async () => {
        try{ 
          let result = await getPokemonDetail(route.params.name)
          if(mounted){
            setPokeData(result);
          }
        }catch(e){
          console.log(e)
    };
  }
    getPokemonData();
    return () =>{
      mounted = false
    }
  });

  const renderStats = ({item}) => {
    return (
      <View style={styles.statsTextView}>
        <Text style={styles.textTitleStat}>
          {capitalizeFirstLetter(item.stat.name) + ': '}
        </Text>
        <Text>{item.base_stat}</Text>
      </View>
    );
  };

  const getType = (dataType) => {
    let text;
    dataType.map((item) => {
      if (text === undefined) {
        text = capitalizeFirstLetter(item.type.name);
      } else {
        text = text + '/' + capitalizeFirstLetter(item.type.name);
      }
    });
    return text;
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {pokeData !== undefined ? (
          <View>
            <View style={styles.topCard}>
              <ImagePoke data={pokeData.sprites} nav={navigation}/>
              <View style={styles.data}>
                <Text>{capitalizeFirstLetter(route.params.name)}</Text>
                <Text>ID: {pokeData.id}</Text>
                <Text>Altura: {pokeData.height} M</Text>
                <Text>Peso: {pokeData.weight} KG</Text>
                <Text>Tipo: {getType(pokeData.types)}</Text>
                <Text>Base XP: {pokeData.base_experience}</Text>
              </View>
            </View>
            <View style={styles.bottomCard}>
              <FlatList
                style={styles.flatList}
                data={pokeData.stats}
                numColumns={2}
                renderItem={renderStats}
                keyExtractor={(item) => item.stat.name}
                contentContainerStyle={styles.itemsStyle}
              />
            </View>
          </View>
        ) : (
          <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size="large" color="white"/>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '70%',
    width: '95%',
    backgroundColor: '#ad312f',
    padding: 15,
  },
  topCard: {
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  bottomCard: {
    height: '50%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    width: '55%',
    height: '100%',
    position: 'relative',
  },
  pokeImage: {
    height: '100%',
    width: '100%',
  },
  data: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  statsTextView: {
    width: '50%',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  textTitleStat: {
    fontWeight: 'bold',
  },
  flatList: {
    width: '90%',
    marginHorizontal: 'auto',
    height: '100%',
  },
  itemsStyle: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});