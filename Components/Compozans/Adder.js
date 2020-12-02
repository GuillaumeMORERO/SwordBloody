import React, { useState, useEffect } from 'react';
import { View, TextInput, Switch, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';
import { addObject } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import { random } from '../../Helpers/Logic';
import Styles from '../Styles';

export default ({ fct, classe }) => {

    //console.log(fct, book, classe);
    const dispatch = useDispatch();
    const [newObject, setNewObject] = useState({
        'type': 'objet',
        'name': 'nomDeTest',
        'descr': 'decrDeTest',
        'use': 0,
        'usable': false,
        'id': ''
    });
    const [isEnabled, setIsEnabled] = useState(false);

    //console.log(newObject);
    const { type, name, descr, use, usable } = newObject
    const press = (name, value) => {
        setNewObject({
            ...newObject,
            [name]: value
        });
    }

    const validation = () => {
        //mettredees verifs en place : nom & type obligatoires !!
        // let nameId = 'id'
        // let valueId = `${type}_${random(1, 10000)}`;
        // console.log(valueId);
        setNewObject({
            ...newObject,
            'id': `${type}_${random(1, 10000)}`
        });
        //console.log(newObject)
        //dispatch(addObject(newObject, classe));
        //fct();
    }
    useEffect(() => {
        if (newObject.id !== '') {
            //console.log(newObject)
            dispatch(addObject(newObject, classe));
            //fct();
        }
    },[newObject])

    const listGenerator = () => {
        let list = []; let min = -10; let max = 10;
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
        ligne: {
            width: '100%',
        },
        txt: {
            alignSelf: 'flex-start'
        },
    });

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

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

            <View>
                <TextCustom text={'Quantité utilisable ?'} size={2} italic />
                <Switch
                    trackColor={{ false: "#rgba(255, 0, 0, 0.3)", true: "#rgba(255, 0, 0, 0.6)" }}
                    thumbColor={'#FFD66F'}
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
                {displayer()}
            </View>


            {/* usable */}
            {/* <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={press('usable', !isEnabled)}
                value={isEnabled}
            /> */}

            <Gradiator
                label={'Valider'}
                fct={() => validation()}
                styleObject={{ width: '80%', alignSelf: 'center' }}
                fSize={2}
            />

        </View>
    )
}
