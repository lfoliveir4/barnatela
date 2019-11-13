import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import api from '../../services/api'
import colors from '../../styles/colors'

import { Container, Item, TextButton, } from './styles'

export default function Category({ navigation }) {
   const [data, setData] = useState([])

   useEffect(() => {
      const fetchData = async () => {
        const result = await api.get("/1/list.php?c=list")
        setData(result.data.drinks);
      };
      fetchData();
    }, []);

   return(
      <ScrollView style={{ flex: 1, }}>
         <Container>
            {data.map(item => (
                  <Item>
                     <TouchableOpacity onPress={() => navigation.navigate("Drink", { itemCategory: item.strCategory })} style={{ marginTop: 10 ,height: 30, justifyContent: 'center',  }}>
                        <TextButton>{item.strCategory}</TextButton>
                     </TouchableOpacity>
               </Item>
            ))}
         </Container>
      </ScrollView>
   ) 
}

Category.navigationOptions = {
   headerTitle: "Categorias",
   headerStyle: {
      backgroundColor: colors.lightgreen,
    },
   headerTintColor: colors.white,
   
 };