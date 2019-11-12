import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';




import Category from '../screen/Category'
import Drinks from '../screen/Drinks'

const HomeStack = createStackNavigator(
  {
    Home: Category,
    Drink: Drinks,
  },
  {
    initialRouteName: "Home"
  },
  
);



const AppContainer = createAppContainer(HomeStack);
export default AppContainer;