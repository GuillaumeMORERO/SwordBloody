import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import TextCustom from '../TexteCustom';
import CapaComponent from './CapaComponent';
import Styles from '../Styles';

export default (data) => {

    const Perso = data.route.params.perso;
    const localizer = data.route.params.localizerSkills[Perso.id];
    const title = data.route.params.localizerSkills.skills;
    const color = data.route.params.dataSup.color;

    const capa = () => {
        var items = new Array();
        Perso.skills.forEach((item, key) => {
            items.push({ id: item.skillID, name: localizer[item.skillID].name, descr: localizer[item.skillID].description });
        });
        return items;
    }
    return (
        <View style={Styles.select_container}>

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <Image source={require('../../Helpers/IMG/backIcon.png')} style={Styles.back} />
            </Pressable>

            <View style={{ flex: 1, marginBottom: 20 }}>

                <View>

                    <View style={Styles.divider}>
                        <View style={{...Styles.hrLine, backgroundColor: color}} />
                        <TextCustom text={title} size={4} bold />
                        <View style={{...Styles.hrLine, backgroundColor: color}} />
                    </View>

                    <FlatList
                        data={capa()}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (<CapaComponent data={item} />)
                        }}
                    />

                </View>

            </View>

        </View>
    )
}