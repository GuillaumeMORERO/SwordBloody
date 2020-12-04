import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';

export default ({ fct, slot }) => {

    const dispatch = useDispatch();
    const { slot1, slot2, slot3 } = useSelector((state) => state.SaveRedux);

    const load = () => {
        let currentSlot;
        slot === 1 ? currentSlot = slot1 :
            slot === 2 ? currentSlot = slot2 :
                slot === 3 ? currentSlot = slot3 : null;
        dispatch(loadData(currentSlot));
        fct();
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
    })

    return (
        <View style={styles.container}>
            <Gradiator
                label="oui"
                fct={() => load()}
                styleObject={{ height: 40, width: '40%', margin: 10 }}
                fSize={2}
            />
            <Gradiator
                label="Non"
                fct={() => fct()}
                styleObject={{ height: 40, width: '40%', margin: 10 }}
                fSize={2}
            />
        </View>

    )
}