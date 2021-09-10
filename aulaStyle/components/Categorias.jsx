import React, { Component } from 'react';
import {FlatList, StyleSheet, View } from 'react-native';
import Item from '../components/Item';
import { DATA } from "../utils/Data";

const App = ({ navigation }) => {
    return (
      <FlatList
      data={DATA}
      numColumns={2}
      contentContainerStyle= {{ 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:20
      }}
      renderItem={({ item }) =>
          <Item item={item} navigation={navigation}/>}
      keyExtractor={item => item.id}/>
    );
  }

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
  });
export default App;
