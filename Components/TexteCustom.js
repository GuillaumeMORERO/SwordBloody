import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {sizes, typo} from '../Helpers/Data';

export default ({text, size=2, couleur = '#FFD66F', italic, bold, typo='Texturina', opacity=1}) => {

    const sizeFont = (size === 1) ? 12 : (size === 2) ? 15 : (size === 3) ? 18 : (size === 4) ? 20 : (size > 4) ? size: size;
    const type = ()=> {
        if (bold && italic) {return 'BoldItalic'}
        else {
            if (bold) {return 'Bold'}
            else if (italic) {return 'Italic'}
            else {return 'Regular'}
        }
    };

    const styles = StyleSheet.create({
        text: {
            textAlign: 'center',
            textShadowColor: 'rgba(255, 255, 255, 0.9)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            fontSize: sizeFont,
            fontFamily:`${typo}-${type()}`,
            color: couleur,
            opacity: opacity
        },
    })

    return(
        <Text style={styles.text}>{text}</Text>
    )
}