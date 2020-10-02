import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/_HomeScreen.js';
import DetailScreen from '../../screens/_DetailScreen.js';

const Home = createStackNavigator();

export default function HomeStack() {
  return (
    <Home.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Home.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Search',
        }}
      />
      <Home.Screen name="Display" 
        component={DetailScreen}
        />
    </Home.Navigator>
  );
}


