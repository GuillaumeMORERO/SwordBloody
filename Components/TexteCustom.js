import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({text, size}) => {

    const sizeFont = parseInt(size);

    const styles = StyleSheet.create({
        text: {
            textAlign: 'center',
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            fontSize: sizeFont,
        },
    })

    return(
        <Text style={styles.text}>{text}</Text>
    )
}