import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native'

import { Item, TextButton, Container } from './styles'

import api from '../../services/api'

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
                           style={{ width: 66, height: 58, }}
                           source={{ uri: item.strDrinkThumb}}
                           />
                        </View>
                        <TextButton>{item.strDrink}</TextButton>
               </Item>
            ))}
         </Container>
      </ScrollView>
   ) 
}