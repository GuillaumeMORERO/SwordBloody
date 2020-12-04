import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

import Gradiator from '../Gradiator';

export default ({perso, navigation}) => {

    const item = perso;
    const type = perso.type;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        icon :{
            resizeMode: 'contain',
            width: 35,
            height: 35,
        }
    })

    return (
        <View style={styles.container}>
            <Gradiator
                label={perso.name}
                fct={() => navigation.navigate("fiche", {item})}
                styleObject={{width: '60%', marginVertical:10}}
                fSize={2}
            />
            <TouchableHighlight onPress={() => navigation.navigate("Skills", {type})}>
                <Image source={require('../../Helpers/IMG/capacite.png')} style={styles.icon} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate("Items", {type})} >
                <Image source={require('../../Helpers/IMG/inventaire.png')} style={styles.icon} />
            </TouchableHighlight>
        </View>
    )
}