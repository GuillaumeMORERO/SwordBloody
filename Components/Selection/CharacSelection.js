import React from 'react';
import { View, FlatList, Text, Image, ScrollView, StyleSheet, SafeAreaView,SectionList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { manageHero } from '../../Store/Actions/SelectActions'

import Gradiator from '../Gradiator';
import Charac from './Charac';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import {classes} from '../../Helpers/Data';

export default (data) => {
console.log('classes',classes);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.SelectorRedux);

    const valid = (act, perso) => {
        dispatch(manageHero(act, perso));
    };

    const styles = StyleSheet.create({
        zone_titre: {
            //flex: 1,
            marginTop: 10,
            justifyContent: 'space-evenly',
            width: '90%',
            alignItems: 'center',
            //backgroundColor: 'red',
        },
        scrollview: {
            flex: 4,
            //justifyContent: 'space-around',
            marginTop: 50,
            marginBottom: 20,
            paddingTop: 20,
            paddingBottom: 20,
            width: '90%',
            height:'100%',
            //backgroundColor: 'green',
        },
        zone_validation : {
            //flex: 1,
            marginBottom: 10,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            marginBottom: 40,
           //backgroundColor: 'red',
        },
    });

 
    return (
        <View style={Styles.select_container}>
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            <ScrollView style={styles.scrollview}>
                <FlatList
                    data={classes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Charac
                            item={item}
                            valid={valid}
                        />
                    )}
                />
            </ScrollView>

            <View style={styles.zone_validation}>
                <Gradiator
                    label='Retour'
                    fct={() => data.navigation.navigate("Selection de base")}
                    styleObject={{width: '95%'}}
                    fSize={15}
                />
            </View>


        </View>
    )
}


