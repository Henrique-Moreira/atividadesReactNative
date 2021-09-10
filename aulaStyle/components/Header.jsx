import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default () => {
    const img = require('../assets/img/icone-sacola.png')

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Lighteria</Text>
            <Image style={styles.imagem} source={img} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        width: 300
    },
    imagem: {
        width: 40,
        height: 40,
        padding: 20,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});