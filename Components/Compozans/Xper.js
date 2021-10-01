import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';
import { xpGain } from '../../Store/Actions/InGameActions';

import { database } from '../../Helpers/Data'
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import {localize} from '../../Helpers/Lang'

export default ({ dataSup, perso }) => {

    const dispatch = useDispatch();
    const [xpoints, setXpoints] = useState(0);
    const [displayed, setDisplayed] = useState(false);
    const localizer = localize[dataSup.lang].characSheet;

    let oldCarac;
    database.forEach(model => {
        if (model.id === perso.id) {
            oldCarac = model.carac.find(caracSet => caracSet.level === perso.oldLevel);
        }
    });

    const press = () => {
        dispatch(xpGain(xpoints, perso.id));
        setDisplayed(true);
    };

    const listGenerator = () => {
        let list = []; let min = 0; let max = 1500;
        for (let i = 0; i < 30; i++) {
            list.push({ 'key': i, 'value': min += 50 });
        }
        return list
    }

    const damage = () => {
        const bonus = perso.carac.bonus === 0 ? '' : perso.carac.bonus > 0 ? ` +${perso.carac.bonus}` : `${perso.carac.bonus}`;
        return `${perso.carac.dommage}d${bonus}`;
    }

    const oldDamage = () => {
        const bonus = oldCarac.bonus === 0 ? '' : oldCarac.bonus > 0 ? ` +${oldCarac.bonus}` : `${oldCarac.bonus}`;
        return `${oldCarac.dommage}d${bonus}`;
    }

    const shower = () => {
        if (perso.oldLevel === perso.level) {
            return <TextCustom text={localizer.rankChange} size={3} italic />
        }
        else {
            return (
                <View style={styles.carac}>

                    <View style={styles.carac_lvl}>
                        <TextCustom text={`${localizer.level} :`} size={4} />
                        <View style={{ flexDirection: 'row' }}>
                            <TextCustom text={`${perso.oldLevel}`} size={2} />
                            <TextCustom text={` >> ${perso.level}`} size={2} couleur={'green'} />
                        </View>
                    </View>

                    <View style={styles.carac_list}>

                        <View style={styles.carac_list_sub}>
                            <TextCustom text={`${localizer.force} :`} size={2} />
                            <View style={{ flexDirection: 'row' }}>
                                <TextCustom text={`${oldCarac.force}`} size={2} />
                                <TextCustom text={` >> ${perso.carac.force}`} size={2} couleur={'green'} />
                            </View>

                        </View>
                        <View style={styles.carac_list_sub}>
                            <TextCustom text={`${localizer.pouvoir} :`} size={2} />
                            <View style={{ flexDirection: 'row' }}>
                                <TextCustom text={`${oldCarac.pouvoir}`} size={2} />
                                <TextCustom text={` >> ${perso.carac.pouvoir}`} size={2} couleur={'green'} />
                            </View>
                        </View>

                        <View style={styles.carac_list_sub}>
                            <TextCustom text={`${localizer.habilete} :`} size={2} />
                            <View style={{ flexDirection: 'row' }}>
                                <TextCustom text={`${oldCarac.habilete}`} size={2} />
                                <TextCustom text={` >> ${perso.carac.habilete}`} size={2} couleur={'green'} />
                            </View>
                        </View>
                        <View style={styles.carac_list_sub}>
                            <TextCustom text={`${localizer.endurance} :`} size={2} />
                            <View style={{ flexDirection: 'row' }}>
                                <TextCustom text={`${oldCarac.endurance}`} size={2} />
                                <TextCustom text={` >> ${perso.carac.endurance}`} size={2} couleur={'green'} />
                            </View>
                        </View>

                    </View>

                    <View style={styles.carac_dommage}>
                        <TextCustom text={`${localizer.dommage} :`} size={4} />
                        <View style={{ flexDirection: 'row' }}>
                            <TextCustom text={`${oldDamage()}`} size={2} />
                            <TextCustom text={` >> ${damage()}`} size={2} couleur={'green'} />
                        </View>
                    </View>

                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            height: '100%',
            justifyContent: 'space-around',
            alignSelf: 'center',
        },
        titler: {
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            //backgroundColor: 'grey'

        },
        titler_text: {
            width: '60%',
            justifyContent: 'center',
            alignSelf: 'center',

        },
        carac: {
            flex: 3,
            padding: 5,
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: dataSup.colorFull,
            borderRadius: 5,
            //backgroundColor: 'blue'
        },
        carac_lvl: {
            flex: 1,
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
            alignItems: 'center',
            //backgroundColor: 'red'
        },
        carac_list: {
            flex: 2,
            width: '70%',
            justifyContent: 'center',
            alignSelf: 'center',
            //backgroundColor: 'green'
        },
        carac_list_sub: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 2,
            //backgroundColor: 'grey'
        },
        carac_dommage: {
            flex: 1,
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-between',
            alignItems: 'center',
            //backgroundColor: 'red'
        },

    })

    return (
        <View style={styles.container}>

            <View style={styles.titler}>
                <View style={styles.titler_text}>
                    <TextCustom text={perso.name} size={3} />
                </View>

                {/* <TextInput
                    onChangeText={ e => setXpoints(e) }
                    //value={toString(xpoints)}
                    placeholder={'Gain d\'xp'}
                    placeholderTextColor={"#FFD66F" }
                    keyboardType={'numeric'}
                    textAlign={'center'}
                    style={{color: '#FFD66F'}}
                /> */}

                <Picker
                    selectedValue={xpoints}
                    style={{ width: '40%', color: '#FFD66F', alignSelf: 'center' }}
                    onValueChange={(itemValue, itemIndex) => setXpoints(itemValue)}
                >
                    {
                        listGenerator().map((nbr) => {
                            return (<Picker.Item key={nbr.key} label={nbr.value.toString()} value={nbr.value} />)
                        })
                    }
                </Picker>
            </View>

            {!displayed &&
                <Gradiator
                    label={localize[dataSup.lang].global.validate}
                    fct={() => press()}
                    styleObject={{ width: '50%', height: 30, marginBottom: 25, alignSelf: 'center' }}
                    fSize={2}
                    grCouleur={dataSup.color}
                />
            }

            {displayed &&
                shower()
            }

        </View>
    )
}
