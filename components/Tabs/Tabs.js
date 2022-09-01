import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function BookmarkScreen() {
  return <Text>Bookmark!</Text>;
}
function ActivityScreen() {
  return <Text>Bookmark!</Text>;
}
function TimeScreen() {
  return <Text>Bookmark!</Text>;
}
const Tab = createBottomTabNavigator();
Icon.loadFont();
export default function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {height: 45},
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          backgroundColor: '#00AAE4',
          height: 45,
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          borderRadius: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={BookmarkScreen}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: () => (
            <Icon name="ios-home-sharp" size={27} color="#CDEEFB" />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: () => (
            <Icon name="ios-bookmark-outline" size={27} color="#CDEEFB" />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: () => (
            <Icon name="ios-contract-outline" size={27} color="#CDEEFB" />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={TimeScreen}
        options={{
          tabBarLabel: 'Time',
          tabBarIcon: () => (
            <Icon name="ios-time-outline" size={27} color="#CDEEFB" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
