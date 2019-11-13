import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: ${colors.blue};
`

export const Item = styled.View`
   margin: 10px 0;
   border-radius:10px;
   height:300px;
   background-color: ${colors.lightblue};
   width:80%;
   padding:10px;
`

export const TitleCategory = styled.Text`
   margin-top: 100;
   font-size: 15px;
   text-align: center;
   justify-content: center;
   font-family: Helvetica;
   color: ${colors.white};
`

export const TextButton = styled.Text`
   margin-top: 5px;
   font-size: 20px;
   text-align: center;
   font-family: Helvetica;
   color: ${colors.white};
`

export const Separator = styled.View``