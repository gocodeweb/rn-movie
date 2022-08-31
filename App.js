/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// import HomeScreen from './components/Home/Home';
import MoviesDetails from './components/MoviesDetails/MoviesDetails';

const Stack = createNativeStackNavigator();

let HomeScreen = require('./components/Home/Home').default;

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MoviesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
