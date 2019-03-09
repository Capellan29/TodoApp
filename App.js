/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';

const MainNavigator = createBottomTabNavigator(
  {
    'Home': {screen: HomeScreen},
    'Profile': {screen: ProfileScreen},
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#aaa',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#0093c4',
      },
    },
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //       // Sometimes we want to add badges to some icons. 
    //       // You can check the implementation below.
    //       IconComponent = HomeIconWithBadge; 
    //     } else if (routeName === 'Profile') {
    //       iconName = `ios-options${focused ? '' : '-outline'}`;
    //     }

    //     // You can return any component that you like here!
    //     return <IconComponent name={iconName} size={25} color={tintColor} />;
    //   },
    // })
  }
);

const MainApp = createAppContainer(MainNavigator);

export default MainApp
