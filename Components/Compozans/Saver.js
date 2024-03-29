import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { manageState } from '../../Store/Actions/SaveActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct, dataSup }) => {

    const dispatch = useDispatch();
    const gameState = useSelector((state) => state.InGameRedux);
    const { slot1, slot2, slot3 } = useSelector((state) => state.SaveRedux);

    const manage = (action, slot) => {
        dispatch(manageState(action, slot, gameState));
        //fct();
    }

    const opaciter = (slot) => {
        if (slot === 1) { return slot1.set ? 1 : 0.3; };
        if (slot === 2) { return slot2.set ? 1 : 0.3; };
        if (slot === 3) { return slot3.set ? 1 : 0.3; };
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        container_sub: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        icon: {
            resizeMode: 'contain',
            width: 35,
            height: 35,
            alignSelf: 'center',
        }
    })

    return (
        <View style={styles.container}>

            <View style={styles.container_sub}>
                <Gradiator
                    label={dataSup.localizerAlert.slotOne}
                    fct={() => manage('save', 1)}
                    styleObject={{ width: '50%', margin: 10 }}
                    fSize={2}
                    fCouleur={slot1.set ? 'grey' : '#FFD66F'}
                    grCouleur={slot1.set ? 'grey' : dataSup.color}
                />
                <TouchableHighlight
                    style={{ width: '25%', opacity: opaciter(1) }}
                    onPress={() => manage('supp', 1)}
                >
                    <Image source={require('../../Helpers/IMG/supp.png')} style={styles.icon} />
                </TouchableHighlight>
            </View>
            { slot1.set && <TextCustom text={`${slot1.team.length} ${dataSup.localizerAlert.characters}, "${dataSup.localizeBook[slot1.book]}", ${dataSup.localizerAlert.section} : ${slot1.paragraph}.`} size={1} italic /> }

            <View style={styles.container_sub}>
                <Gradiator
                    label={dataSup.localizerAlert.slotTwo}
                    fct={() => manage('save', 2)}
                    styleObject={{ width: '50%', margin: 10 }}
                    fSize={2}
                    fCouleur={slot2.set ? 'grey' : '#FFD66F'}
                    grCouleur={slot2.set ? 'grey' : dataSup.color}
                />
                <TouchableHighlight
                    style={{ width: '25%', opacity: opaciter(2) }}
                    onPress={() => manage('supp', 2)}
                >
                    <Image source={require('../../Helpers/IMG/supp.png')} style={styles.icon} />
                </TouchableHighlight>
            </View>
            { slot2.set && <TextCustom text={`${slot2.team.length} ${dataSup.localizerAlert.characters}, "${dataSup.localizeBook[slot2.book]}", ${dataSup.localizerAlert.section} : ${slot2.paragraph}.`} size={1} italic /> }

            <View style={styles.container_sub}>
                <Gradiator
                    label={dataSup.localizerAlert.slotThree}
                    fct={() => manage('save', 3)}
                    styleObject={{ width: '50%', margin: 10 }}
                    fSize={2}
                    fCouleur={slot3.set ? 'grey' : '#FFD66F'}
                    grCouleur={slot3.set ? 'grey' : dataSup.color}
                />
                <TouchableHighlight
                    style={{ width: '25%', opacity: opaciter(3) }}
                    onPress={() => manage('supp', 3)}
                >
                    <Image source={require('../../Helpers/IMG/supp.png')} style={styles.icon} />
                </TouchableHighlight>
            </View>
            { slot3.set && <TextCustom text={`${slot3.team.length} ${dataSup.localizerAlert.characters}, "${dataSup.localizeBook[slot2.book]}", ${dataSup.localizerAlert.section} : ${slot3.paragraph}.`} size={1} italic /> }

        </View>

    )
}