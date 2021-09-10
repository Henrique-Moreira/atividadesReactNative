import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default () => {
    const img = require('../assets/img/icone-sacola.png')

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Lighteria</Text>
            <TouchableOpacity style={styles.imageBox}>
                <Image style={styles.imagem} source={img} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 35
    },
    imagem: {
        width: 40,
        height: 40
    },
    imageBox: {
        padding: 15,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});