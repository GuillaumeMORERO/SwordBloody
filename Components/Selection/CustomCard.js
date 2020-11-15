import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextCustom from '../TexteCustom';

export default ({item, level}) => {

    const styles = StyleSheet.create({
        card : {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '70%',
            height: 65,
            
            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 10,
            paddingBottom: 5,
            paddingTop: 5,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 5,
            marginBottom: 5,

            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 3
        },
        card_column : {
            flex: 2,
        },
        card_column_left : {
            flex: 1,
            justifyContent: 'space-between',
            alignItems: "stretch",
        },
    })

    return (
        <View style={styles.card}>

            <View style={styles.card_column_left}>
                <TextCustom text='Nom : ' size= {12} />
                <TextCustom text='Classe : ' size= {12} />
                <TextCustom text='Niveau : ' size= {12} />
            </View>

            <View style={styles.card_column}>
                <TextCustom text={item.name} size= {15} />
                <TextCustom text={item.type} size= {15} />
                <TextCustom text={level} size= {15} />
            </View>
            
        </View>
        
    )
}