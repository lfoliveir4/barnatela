import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

if(__DEV__) {
  import('./src/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <Text>Bar na Tela</Text>
    </View>
  )
}



export default App;
