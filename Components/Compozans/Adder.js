import React, { useState, useEffect } from 'react';
import { View, TextInput, Switch, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';
import { addObject } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import { random } from '../../Helpers/Logic';
import Styles from '../Styles';

export default ({ fct, persoId }) => {

    const dispatch = useDispatch();
    const [newObject, setNewObject] = useState({
        'type': 'objet',
        'name': '',
        'descr': '',
        'use': 0,
        'usable': false,
        'id': ''
    });
    const [isEnabled, setIsEnabled] = useState(false);

    const { type, name, descr, use } = newObject
    const press = (name, value) => {
        setNewObject({
            ...newObject,
            [name]: value
        });
    }

    const validation = () => {
        let usableValue = newObject.use > 0 ? true : false;
        setNewObject({
            ...newObject,
            'id': `${type}_${random(1, 10000)}`,
            'usable': usableValue
        });
    }
    useEffect(() => {
        if (newObject.id !== '') {
            dispatch(addObject(newObject, persoId));
            fct();
        }
    }, [newObject])

    const listGenerator = () => {
        let list = []; let min = 0; let max = 10;
        for (let i = 0; i < (max * 2) + 1; i++) {
            list.push({ 'key': i, 'value': min++ });
        }
        return list
    }

    const displayer = () => {
        if (isEnabled) {
            return (
                <View>
                    <TextCustom text={'Choisissez une quantité'} size={1} />
                    <Picker
                        selectedValue={use}
                        style={{ width: 150, color: '#FFD66F', }}
                        onValueChange={(itemValue, itemIndex) => press('use', itemValue)}
                    >
                        {
                            listGenerator().map((nbr) => {
                                return (<Picker.Item key={nbr.key} label={nbr.value.toString()} value={nbr.value} />)
                            })
                        }
                    </Picker>
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        ScrollView: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        ligne: {
            width: '70%',
            marginVertical: 10,
            justifyContent: 'center'
        },
        txt: {
            alignSelf: 'center'
        },
    });

    return (
        <ScrollView contentContainerStyle={styles.ScrollView}>

            <View style={Styles.hrLine} />

            <View style={styles.ligne}>
                <View style={styles.txt}>
                    <TextCustom text={'Choisissez un type d\'objet :'} size={2} italic />
                </View>

                <View style={{ width: '50%', alignSelf: 'center' }}>
                    <Picker
                        selectedValue={type}
                        style={{ width: 100, color: '#FFD66F', }}
                        onValueChange={(itemValue, itemIndex) => press('type', itemValue)}
                    >
                        <Picker.Item label={'Objet'} value={'objet'} />
                        <Picker.Item label={'Arme'} value={'arme'} />
                        <Picker.Item label={'Armure'} value={'armure'} />
                    </Picker>
                </View>
            </View>

            <View style={Styles.hrLine} />

            <View style={styles.ligne}>
                <View style={styles.txt}>
                    <TextCustom text={'Saisissez un nom'} size={2} italic />
                </View>
                <TextInput
                    onChangeText={e => press('name', e)}
                    value={name}
                    placeholder={'nom'}
                    placeholderTextColor="#FFD66F"
                    maxLength={20}
                    textAlign={'center'}
                    style={{ color: '#FFD66F' }}
                />
            </View>

            <View style={Styles.hrLine} />

            <View style={styles.ligne}>
                <View style={styles.txt}>
                    <TextCustom text={'Saisissez une descritption (facultatif)'} size={2} italic />
                </View>
                <TextInput
                    onChangeText={e => press('descr', e)}
                    value={descr}
                    placeholder={'descritption'}
                    placeholderTextColor="#FFD66F"
                    textAlign={'center'}
                    style={{ color: '#FFD66F' }}
                />
            </View>

            <View style={Styles.hrLine} />

            <View style={{ ...styles.ligne, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextCustom text={'Quantité utilisable ?'} size={2} italic />
                <Switch
                    trackColor={{ false: "#rgba(255, 0, 0, 0.3)", true: "#rgba(255, 0, 0, 0.6)" }}
                    thumbColor={'#FFD66F'}
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
            </View>
            {displayer()}

            <Gradiator
                label={'Valider'}
                fct={() => validation()}
                styleObject={{ width: '80%', alignSelf: 'center' }}
                fSize={2}
            />

        </ScrollView>
    )
}
