import React from 'react';
import { render } from 'react-dom';
import {Text} from 'react-native';

const Detalhes = ({route}) => {
    return (
        <Text>Nome do produto: {route.params.item.title} </Text>
    )
}

export default Detalhes;