import React from 'react';
import styled from 'styled-components/native'
import AppContainer from './src/navigation/MainNavigation'


if(__DEV__) {
  import('./src/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}


const Container = styled.View`
    flex: 1;
`


function App() {
    return (
      <Container>
        <AppContainer />
      </Container>
    )
}


export default App


