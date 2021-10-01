import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

import TextCustom from '../Components/TexteCustom'

export default ({ state, descriptors, navigation }) => {

    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) { return null; }

    return (
        <View style={{ flexDirection: 'row', height: '10%'}}>
            {state.routes.map((route, index) => {
                const label = route.name;
                const isFocused = state.index === index;

                const opac = isFocused ? 1 : 0.6;
                const height = isFocused ? '80%' : '70%';

                const styles = StyleSheet.create({
                    img: {
                        resizeMode: 'contain',
                        height: height,
                        opacity: opac
                    },
                    barBot: {
                        width: '100%',
                        height: 2,
                        backgroundColor: '#rgba(255, 0, 0, 0.3)',
                        opacity: opac,

                    },
                    pressable : {
                        flex: 1,  
                        justifyContent:'space-between', 
                        alignItems:'center',
                    },
                });
               
                const onPress = () => {

                    if (label === 'Fiches') {navigation.navigate('Fiches', {screen: 'Feuilles de personnage'}); }
                    else {navigation.navigate(label);};
                }
                const getIcon = () => {
                    if (label === 'Selection') { return <Image style={styles.img} source={require('../Helpers/IMG/select.png')} /> }
                    if (label === 'Fiches') { return <Image style={styles.img} source={require('../Helpers/IMG/fiches.png')} /> }
                    if (label === 'Settings') { return <Image style={styles.img} source={require('../Helpers/IMG/settings.png')} /> }
                }
                
                return (
                    <Pressable onPress={onPress} style={styles.pressable} key={index} id={index}>
                        {getIcon()}
                        <View style={styles.barBot}></View>
                    </Pressable>
                    
                );
            })}
        </View>
    );
}