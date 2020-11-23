import React, {useRef, useEffect, useState} from 'react';
import { View, ScrollView , StyleSheet, Image, FlatList, ActivityIndicator  , SafeAreaView  } from 'react-native';

import TextCustom from '../Components/TexteCustom'

export default ({name, size, opacity}) => {

    const styles = StyleSheet.create({
        img: {
            resizeMode: 'contain', 
            width: size, 
            opacity: opacity
        },
    });

    const getIcon = () => {
        if (name === 'Selection') {return <Image style={styles.img} source={require('../Helpers/IMG/homeIcon.png')} />}
        if (name === 'Fiches') {return <Image style={styles.img} source={require('../Helpers/IMG/caracIcon.png')} />}
       
    }

    return (
        <View>
            {getIcon()}
        </View>
      
    )

}