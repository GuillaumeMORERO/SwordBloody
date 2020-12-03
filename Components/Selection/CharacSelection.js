import React from 'react';
import { View, FlatList, Text, Image, ScrollView, StyleSheet, SectionList, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import { manageHero } from '../../Store/Actions/InGameActions'

import Charac from './Charac';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import { classes } from '../../Helpers/Data';

export default (data) => {

    const dispatch = useDispatch();

    const valid = (act, perso) => { dispatch(manageHero(act, perso)); };

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
                <View style={Styles.hrLine} />
                <TextCustom text={'Selection de personnage(s)'} size={4} bold />
                <View style={Styles.hrLine} />
            </View>

            <ScrollView style={styles.scrollview}>
                <FlatList
                    data={classes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Charac
                            item={item}
                            valid={valid}
                        />
                    )}
                />
            </ScrollView>

        </View>
    )
}


