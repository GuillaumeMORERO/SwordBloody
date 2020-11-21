import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({text, size=14, couleur = '#FFD66F', italic, bold}) => {

    const sizeFont = parseInt(size);
    (bold) ? bold = 'bold' : bold = 'normal';
    (italic) ? italic = 'italic' : italic = 'normal';

    const styles = StyleSheet.create({
        text: {
            textAlign: 'center',
            textShadowColor: 'rgba(255, 255, 255, 0.9)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            fontSize: sizeFont,
            color: couleur,
            fontStyle: italic,
            fontWeight: bold
        },
    })

    return(
        <Text style={styles.text}>{text}</Text>
    )
}