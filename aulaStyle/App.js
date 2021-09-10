import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Listagens from './components/Listagens';


const LotsOfStyles = () => {
  return (
    <View style={styles.geral}>
      <View style={styles.container}>
        <Header/>
        <Listagens/>
      </View>
    </View>
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

export default LotsOfStyles;

