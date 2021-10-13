import React from 'react';
import { View, FlatList, Image, ScrollView, StyleSheet, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import { manageHero } from '../../Store/Actions/InGameActions'

import Charac from './Charac';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import { classes } from '../../Helpers/Data';
import {localize} from '../../Helpers/Lang'

export default (data) => {
    const lang = data.route.params.lang;
    const color = data.route.params.color;
    const colorFull = data.route.params.colorFull;
    
    const dispatch = useDispatch();
    
    const valid = (act, perso) => { dispatch(manageHero(act, perso)); };

    const propz = {
        'lang': lang,
        'color': color,
        'colorFull': colorFull,
        'validTxt': localize[lang].selection.gameValidate,
        'delTxt': localize[lang].global.delete,
        'characType': localize[lang].characs,
    };

    const styles = StyleSheet.create({
        scrollview: {
            flex: 4,
            marginBottom: 20,
            paddingBottom: 20,
            width: '90%',
            height: '100%',
        },
        zone_validation: {
            marginBottom: 10,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            marginBottom: 20,
        },
    });

    return (
        <View style={Styles.select_container}>

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <Image source={require('../../Helpers/IMG/backIcon.png')} style={Styles.back} />
            </Pressable>

            <View style={Styles.divider}>
                <View style={{...Styles.hrLine, backgroundColor: colorFull}} />
                <TextCustom text={localize[lang].selection.characSelect} size={4} bold />
                <View style={{...Styles.hrLine, backgroundColor: colorFull}} />
            </View>

            <View style={styles.scrollview}>
                <FlatList
                    data={classes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Charac
                            item={item}
                            propz={propz}
                            valid={valid}
                        />
                    )}
                />
            </View>

        </View>
    )
}


