import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Categorias from './Categorias';

export default () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.line} />
                <Text style={styles.lineText}>Categorias</Text>
                <View style={styles.line} />
            </View>
                <Categorias />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#a3a3a3'
    },
    lineText: {
        width: 100,
        textAlign: 'center',
        color: '#a3a3a3',
        fontSize: 15
    },
    backgroundGeral: {
        height: '100%'
    }
});