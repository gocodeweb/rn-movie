/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StatusBar, useColorScheme, View} from 'react-native';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import Header from '../Header/Header';

import MyTabs from '../Tabs/Tabs';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#162B3D',
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <MoviesDisplay navigation={navigation} />
      </ScrollView>
      <MyTabs />
    </>
  );
};

export default HomeScreen;
