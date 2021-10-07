import React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../../Store/Actions/InGameActions';
import { manageState } from '../../Store/Actions/SaveActions';

import TextCustom from '../TexteCustom';
import Styles from '../Styles';

import Gradiator from '../Gradiator';

export default ({ fct, slot, dataSup }) => {

    const localizer = dataSup.localizer.forAlert;
    const localizerBook = dataSup.localizer.books;

    const dispatch = useDispatch();
    const { slot1, slot2, slot3 } = useSelector((state) => state.SaveRedux);

    let currentSlot;
    slot === 1 ? currentSlot = slot1 :
        slot === 2 ? currentSlot = slot2 :
            slot === 3 ? currentSlot = slot3 : null;

    const load = () => {
        dispatch(loadData(currentSlot));
        fct();
    }

    const supp = () => {
        dispatch(manageState('supp', slot));
        fct();
    }

    const styles = StyleSheet.create({
        container: {
            //flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            //backgroundColor: 'grey',
        },
        choice: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
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

            <View>

                <View style={{ ...Styles.divider, marginVertical: 5 }}>
                    <View style={Styles.hrLine} />
                    <TextCustom text={localizer.team} size={3} bold />
                    <View style={Styles.hrLine} />
                </View>

                <View style={{ height: '40%' }}>
                    <FlatList
                        data={currentSlot.finalTeam}
                        keyExtractor={(item) => item.classe.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    width: '80%',
                                    //backgroundColor: 'red'
                                }}>
                                    <TextCustom text={item.name} size={3} bold />
                                    <TextCustom text={item.classe} size={1} italic />
                                    <TextCustom text={`${localizer.level} : ${item.level}`} size={1} bold />
                                </View>
                            )

                        }}
                    />
                </View>

                <View style={{ ...Styles.divider, marginVertical: 5 }}>
                    <View style={Styles.hrLine} />
                    <TextCustom text={localizer.book} size={3} bold />
                    <View style={Styles.hrLine} />
                </View>

                <TextCustom text={`"${localizerBook[currentSlot.book]}",  ${localizer.section} : ${currentSlot.paragraph}.`} size={1} italic />

            </View>

            <View style={styles.choice}>
                <Gradiator
                    label={dataSup.localizer.global.yes}
                    fct={() => load()}
                    styleObject={{ height: 40, width: '40%', margin: 10 }}
                    fSize={2}
                    grCouleur={dataSup.color}
                />
                <Gradiator
                    label={dataSup.localizer.global.no}
                    fct={() => fct()}
                    styleObject={{ height: 40, width: '40%', margin: 10 }}
                    fSize={2}
                    grCouleur={dataSup.color}
                />
            </View>

            <View style={styles.choice}>
                <TextCustom text={localizer.deleteSlot} size={1} italic />
                <TouchableHighlight
                    style={{ width: '25%'}}
                    onPress={() => supp()}
                >
                    <Image source={require('../../Helpers/IMG/supp.png')} style={styles.icon} />
                </TouchableHighlight>
            </View>

        </View>


    )
}