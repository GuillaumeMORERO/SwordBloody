import React from 'react';
import { View, FlatList, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { manageHero } from '../../Store/Actions/SelectActions'

import Gradiator from '../Gradiator';
import Charac from './Charac';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.SelectorRedux);

    const valid = (act, perso) => {
        dispatch(manageHero(act, perso));
    };

    const styles = StyleSheet.create({
        zone_titre: {
            flex: 1,
            justifyContent: 'space-evenly',
            width: '90%',
            alignItems: 'center',
            //backgroundColor: 'red',
        },
        scrollview: {
            flex: 3,
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 20,
            width: '90%',
        },
        zone_validation : {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
        },
    });

 
    return (
        <View style={Styles.select_container}>
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            <View style={styles.zone_titre}>
                <TextCustom text='Selection de personnage(s)' size= {28} />
            </View>

            <View style={styles.scrollview}>
                <FlatList
                    data={state.team}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Charac
                            item={item}
                            valid={valid}
                        />
                    )}
                />
            </View>

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


