import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image} from 'react-native'
import colors from '../../styles/colors'
import api from '../../services/api'

import { Container, ContainerDrinks, TitleDrink, TitleIngredient, TextIngredient } from './styles'


export default function Ingredients({ navigation }) {
   const [data, setData] = useState([])
   const getDetails = navigation.getParam("ingredientId")

   useEffect(() => {
      const fetchData = async () => {
        const result = await api.get(`/1/search.php?s=${getDetails}`)
        setData(result.data.drinks);
      };
      fetchData();
    }, []);


   return(
      <Container>
         {data.map(item => (
            <ScrollView>
               <ContainerDrinks>
                     <View style={{ marginTop: 20, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                        style={{ width: 200, height: 200, borderRadius: 100 }}
                        source={{ uri: item.strDrinkThumb}}
                        />
                     </View>
                     <TitleDrink>{item.strDrink}</TitleDrink>
                     <TitleIngredient>Ingredientes: </TitleIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient1}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient2}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient3}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient4}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient5}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient6}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient7}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient8}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient9}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient10}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient11}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient12}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient13}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient14}</TextIngredient>
                     <TextIngredient style={{ marginVertical: 2 }}>{item.strIngredient15}</TextIngredient>
            </ContainerDrinks>
            </ScrollView>
         ))}
      </Container>
   )

}

Ingredients.navigationOptions = {
   headerTitle: "Detalhes do Drink",
   headerStyle: {
      backgroundColor: colors.lightgreen,
    },
   headerTintColor: colors.white,
}
