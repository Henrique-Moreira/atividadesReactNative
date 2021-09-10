import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categorias from './components/Categorias';
import Detalhes from './components/Detalhes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Categorias" component={Categorias} options={{ title: 'Loja de luminárias' }} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    height: '100%'
  },
  container: {
    marginHorizontal: 30,
    height: '100%'
  }
});

export default App;

