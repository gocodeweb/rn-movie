import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../Home/Home';

function BookmarkScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bookmark!</Text>
    </View>
  );
}
function ActivityScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bookmark!</Text>
    </View>
  );
}
function TimeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bookmark!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function MyTabs({navigation}) {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      //   tabBar={props => <MyTabBar {...props} />}
      //   tabBarButton={props => <TouchableOpacity {...props} />}
      screenOptions={{
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
        },
      }}>
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home-sharp" size={27} color="#CDEEFB" />
          ),
        }}
      /> */}
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
    // </NavigationContainer>
  );
}