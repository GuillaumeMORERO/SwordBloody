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
            
            paddingBottom: 5,
            paddingTop: 5,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 5,
            marginBottom: 5,
        },
 
        card_column_left : {
            flex: 1,
            height:'100%',
            justifyContent: 'space-between',
        },
        card_column_right : {
            flex: 2,
        },
        hrLine: {
            width: '70%',
            height: 1,
            backgroundColor: '#rgba(255, 0, 0, 0.5)',
        },
    })

    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={styles.card}>

                <View style={styles.card_column_left}>
                    <TextCustom text='Nom : ' size= {1} />
                    <TextCustom text='Classe : ' size= {1} />
                    <TextCustom text='Niveau : ' size= {1} />
                </View>

                

                <View style={styles.card_column_right}>
                    <TextCustom text={item.name} size= {2} />
                    <TextCustom text={item.type} size= {2} />
                    <TextCustom text={level} size= {2} />
                </View>

                
            </View>
            <View style={styles.hrLine} />
        </View>
        
    )
}