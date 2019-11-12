import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';




import Category from '../screen/Category'
import Drinks from '../screen/Drinks'
import Ingredient from '../screen/Ingredient'

const HomeStack = createStackNavigator(
  {
    Home: Category,
    Drink: Drinks,
    Ingredients: Ingredient
  },
  {
    initialRouteName: "Ingredients",
    //headerMode: "none",
  },
  
);



const AppContainer = createAppContainer(HomeStack);
export default AppContainer;