import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, Button, StyleSheet, } from 'react-native'
import { Item, TextButton, Container,} from './styles'

import colors from '../../styles/colors'
import api from '../../services/api'

function Separator() {
   return <View style={{ marginVertical: 8, borderBottomColor: '#737373', borderBottomWidth: StyleSheet.hairlineWidth,}} />
}

export default function Drinks({ navigation }) {
   const [data, setData] = useState([])
   const getDrinks = navigation.getParam("itemCategory")
   
   useEffect(() => {
      const fetchData = async () => {
        const result = await api.get(`/1/filter.php?c=${getDrinks}`)
        setData(result.data.drinks);
      };
      fetchData();
    }, []);
    

   return(
      <ScrollView style={{ flex: 1, }}>
         <Container>
            {data.map(item => (
                  <Item>
                        <View style={{ marginTop: 20, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                           <Image
                           style={{ width: 100, height: 100, borderRadius: 50 }}
                           source={{ uri: item.strDrinkThumb}}
                           />
                        </View>
                        <TextButton>{item.strDrink}</TextButton>
                        <Separator />
                        <Button color="#c9d1d3" onPress={() => navigation.navigate("Ingredients", {ingredientId: item.strDrink })} style={{ paddingTop: 50 }} title="Ingredientes" />
                  </Item>
            ))}
         </Container>
      </ScrollView>
   ) 
}

Drinks.navigationOptions = {
   headerTitle: "Drinks",
   headerStyle: {
      backgroundColor: colors.lightgreen,
    },
   headerTintColor: colors.white,
   
}