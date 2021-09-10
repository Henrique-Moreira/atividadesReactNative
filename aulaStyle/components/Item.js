import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Item = ({ item, navigation }) => (
    <TouchableOpacity style={styles.categoria}
        onPress={() =>
            navigation.navigate('Detalhes', { item })
        }>            
        <Image source={item.imageSrc} style={styles.categoriaImage} resizeMode="contain" />
        <Text style={styles.categoriaText}>{item.title}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    categoria: {
        width: 155,
        height: 160,
        margin: 5,
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoriaImage: {
        width: 100,
        height: 100
    },
    categoriaText: {
        color: '#a3a3a3'
    },
    // items: {
    //     height: 150,
    //     width: 150,
    //     backgroundColor: 'white',
    //     flex: 1,
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: 4
    // }
});

export default Item;