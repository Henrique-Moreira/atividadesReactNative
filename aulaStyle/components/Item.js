import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Item = ({ item, navigation }) => (
    <TouchableOpacity style={styles.button}>
        <View style={styles.container}>
            <View style={styles.categoria} >
                <Image source={item.imageSrc} style={styles.categoriaImage} resizeMode="contain" />
                <Text style={styles.categoriaText}>{item.title}</Text>
            </View>
        </View>
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
    }
});

export default Item;