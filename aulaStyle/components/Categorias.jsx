import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Item from '../components/Item';
import { DATA } from "../utils/Data";
import Listagens from '../components/Listagens';

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Listagens/>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data={DATA}
        numColumns={2}
        renderItem={({ item }) =>
          <Item item={item} navigation={navigation} />}
        keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
    }
});
export default App;
