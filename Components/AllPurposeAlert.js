import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

import TextCustom from './TexteCustom';

export default (title, message, closeAlert) => {

    const texts = () => {
        return(
            <View style={styles.alert_view}>
                <Image style={styles.backgroundImage} source={require('../Helpers/IMG/Parchemin.png')} />
                <TextCustom text={` - ${title} - `} size={18} italic bold  />
                <TextCustom text={message} size={12} />
            </View>
        )
    }

    const styles = StyleSheet.create({
        backgroundImage: {
            position: 'absolute',
            resizeMode: 'contain',
            width: '100%', 
            height: '100%',
        },
        alert_view: {
            height: '100%',
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            padding: 5,
            textAlign: 'center',
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
        },
    });

    return(
        <View style={{width: '100%'}}>
            <TouchableHighlight onPress={() => closeAlert()}>
                {texts()}
            </TouchableHighlight>
        </View>
    )
}