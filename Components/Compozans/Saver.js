import React, { useState } from 'react';
import { View, TextInput, FlatList, ScrollView, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { saveState } from '../../Store/Actions/SaveActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct }) => {

    const dispatch = useDispatch();
    const gameState = useSelector((state) => state.InGameRedux);
    const {slot1, slot2, slot3} = useSelector((state) => state.SaveRedux);

    const press = (slot) => {
        dispatch(saveState(slot, gameState));
        // fct();
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent:'space-evenly',
            alignItems: 'center',
        },
    })

    return (
        <View style={styles.container}>
            <TextCustom text={'voici la sauvegarde !!!'} />
            <Gradiator
                label={'Sauvegarde 1'}
                fct={() => press(1)}
                styleObject={{ width: '50%', margin: 10 }}
                fSize={2}
            />
            <Gradiator
                label={'Sauvegarde 2'}
                fct={() => press(2)}
                styleObject={{ width: '50%', margin: 10 }}
                fSize={2}
            />
            <Gradiator
                label={'Sauvegarde 3'}
                fct={() => press(3)}
                styleObject={{ width: '50%', margin: 10 }}
                fSize={2}
            />
        </View>

    )
}