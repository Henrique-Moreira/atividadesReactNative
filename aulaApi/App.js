import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View, StyleSheet } from 'react-native';

export default () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDogs = async () => {
     try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      // console.log(JSON.stringify(json));
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cachorros aleatórios</Text>
      {isLoading ? <ActivityIndicator/> : (
        <Image source={
          {uri:data.message}}
          style={styles.image}
          />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: 300,
    height: 300
  },
  text: {
    fontSize: 25,
    marginBottom: 30,
    fontFamily: 'sans-serif-condensed',
    textDecorationLine: "underline"
  }
}) 