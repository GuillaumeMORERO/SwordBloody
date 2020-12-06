import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../../Store/Actions/InGameActions';

import TextCustom from '../TexteCustom';
import Styles from '../Styles';

import Gradiator from '../Gradiator';

export default ({ fct, slot }) => {

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
            //backgroundColor: 'blue',
        },
        info: {
            //backgroundColor: 'grey',

        },
    })

    return (
        <View style={styles.container}>

            <View style={styles.info}>

                <View style={{...Styles.divider, marginVertical: 5}}>
                    <View style={Styles.hrLine} />
                    <TextCustom text='Equipe' size={3} bold />
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
                                    alignSelf:'center',
                                    width: '80%',
                                    //backgroundColor: 'red'
                                }}>
                                    <TextCustom text={item.name} size={3} bold />
                                    <TextCustom text={item.classe} size={1} italic />
                                    <TextCustom text={`niveau : ${item.level}`} size={1} bold />
                                </View>
                            )

                        }}
                    />
                </View>

                <View style={{...Styles.divider, marginVertical: 5}}>
                    <View style={Styles.hrLine} />
                    <TextCustom text='Livre' size={3} bold />
                    <View style={Styles.hrLine} />
                </View>

                <TextCustom text={`"${currentSlot.book}",  paragraphe : ${currentSlot.paragraph}.`} size={1} italic />

            </View>

            <View style={styles.choice}>
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

        </View>


    )
}