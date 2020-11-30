import React, { useState } from 'react';
import { View, TextInput, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useDispatch, useSelector } from 'react-redux';
import { suppNotes } from '../../Store/Actions/InGameActions';
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import { classes } from '../../Helpers/Data';

export default ({ carac, listGenerator, send }) => {

    console.log('listGenerator = ',listGenerator);

    const dispatch = useDispatch();
    const [modif, setModif] = useState(0);

    const select = (carac, value) => {
        setModif(value);
        send(carac, value);
    }

    const styles = StyleSheet.create({
        ligne: {
            width: '90%',
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
            alignSelf: 'center',
        }
    });

    return (
        <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'space-around', }}>
                <TextCustom text={`${carac.name} : `} size={2} italic />
                <TextCustom text={carac.value} size={2} />
            </View>

            <View style={{ width: '50%', alignItems: 'center' }}>
                <Picker
                    selectedValue={modif}
                    style={{ width: 100, color:'#FFD66F', }}
                    onValueChange={(itemValue, itemIndex) => select(carac.name, itemValue)}
                >
                    {
                        listGenerator.map((nbr) => {
                            return (<Picker.Item key={nbr.key} label={nbr.value.toString()} value={nbr.value} />)
                        })
                    }
                </Picker>
            </View>

        </View>
    )
}
