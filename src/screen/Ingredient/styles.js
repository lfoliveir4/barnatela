import styled from 'styled-components/native'
import colors from '../../styles/colors'


export const Container = styled.View`
   flex: 1;
   background-color: ${colors.blue};
`

export const ContainerDrinks = styled.View`
   margin: 40px;
   border-radius:10px;
   min-height: 400px;
   background-color: ${colors.lightblue};
   width:80%;
   padding:10px;

`
export const TitleDrink = styled.Text`
   text-align: center;
   font-size: 30px;
   padding: 2px;
   color: ${colors.white};
`

export const TitleIngredient = styled.Text`
   font-size: 17px;
   font-weight: bold;
   margin-top: 10px;
   color: ${colors.white};
`

export const TextIngredient = styled.Text`
   font-size: 15px;
   margin-top: 5px;
   color: ${colors.white}

`