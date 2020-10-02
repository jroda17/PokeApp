import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';

export default function ImagePoke(props) {
  const [imagePos, setImagePos] = React.useState({
    side: false,
    sex: undefined,
    shiny: false,
  });

  React.useEffect(() => {
    let mounted = true
    const setData = () => {
      if(props.data !== undefined && Object.keys(props.data).length !== 0 && props.data.front_default !== null && props.data.front_default !== undefined ){
      if (props.data.front_default !== null) {
        if(mounted){
        setImagePos({
          ...imagePos,
          sex: false,
        });
      }
      }
    }else{
      props.navigation.goBack()
    }
  };

    setData();

    return () =>{
      mounted = false
    }
  },[]);

  const imageSetter = () => {
    if (imagePos.side === false) {
      if (imagePos.sex === undefined || imagePos.sex === false) {
        if (imagePos.shiny === true) {
          return props.data.front_shiny;
        } else {
          return props.data.front_default;
        }
      } else {
        if (imagePos.shiny === true) {
          return props.data.front_shiny_female;
        } else {
          return props.data.front_female;
        }
      }
    }
    if (imagePos.sex === undefined || imagePos.sex === false) {
      if (imagePos.shiny === true) {
        return props.data.back_shiny;
      } else {
        return props.data.back_default;
      }
    } else {
      if (imagePos.shiny === true) {
        return props.data.back_shiny_female;
      } else {
        return props.data.back_female;
      }
    }
  };

  return (
    <View style={styles.imageCard}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          {props.data.back_default !== null && (
        <TouchableOpacity
          onPress={() => setImagePos({...imagePos, side: !imagePos.side})}>
          <Icon name="retweet" size={25} type="font-awesome-5" />
        </TouchableOpacity>
          )}
        {props.data.front_female !== null && (
          <TouchableOpacity
            onPress={() => setImagePos({...imagePos, sex: !imagePos.sex})}>
            <Icon name={imagePos.sex ? 'male' : 'female'} type="font-awesome-5" size={25} />
          </TouchableOpacity>
        )}
        {props.data.front_shiny !== null && (
        <TouchableOpacity
          onPress={() => setImagePos({...imagePos, shiny: !imagePos.shiny})}>
          <Icon name={imagePos.shiny ? 'star' : 'star'} size={25} type="font-awesome-5" solid={imagePos.shiny ? true : false}/>
        </TouchableOpacity>
        )}
      </View>
      {props.data.front_default !== null ? (
        <Image source={{uri: imageSetter()}} style={styles.pokeImage} />
      ): (
        <Image source={require("../assets/icons/noimage.png")} style={styles.emtpy} />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    width: '55%',
    height: '100%',
    position: 'relative',
  },
  pokeImage: {
    height: '100%',
    width: '100%',
  },
  emtpy:{
    height: '90%',
    width: '90%',
  }
});

ImagePoke.propTypes = {
  data : PropTypes.object
};