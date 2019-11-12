import styled from 'styled-components/native'


export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`

export const Item = styled.View`
   border:1px solid #ccc;
   margin: 10px 0;
   border-radius:10px;
   box-shadow:0 0 10px #ccc;
   height:200px;
   background-color: black;
   width:80%;
   padding:10px;
`

export const TitleCategory = styled.Text`
   margin-top: 100;
   font-size: 15px;
   text-align: center;
   justify-content: center;
   font-family: Helvetica;
   color: #FFF;
`

export const TextButton = styled.Text`
   font-size: 20px;
   text-align: center;
   font-family: Helvetica;
   color: #FFF;
`