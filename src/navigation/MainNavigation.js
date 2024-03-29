import React from 'react';
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
    initialRouteName: "Home",
  },
  
);



const AppContainer = createAppContainer(HomeStack);
export default AppContainer;