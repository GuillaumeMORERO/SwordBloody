import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import TextCustom from '../TexteCustom';

export default ({ carac, listGenerator, send }) => {

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
        <View style={{ flexDirection: 'row', height:40 }}>

            <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'space-around', }}>
                <TextCustom text={`${carac.nameToDisplay} : `} size={2} italic />
                <TextCustom text={`${carac.actualValue} /${carac.value}`} size={2} />
            </View>

            <View style={{ width: '50%', alignItems: 'center' }}>
                <Picker
                    selectedValue={modif}
                    style={{ width: 100, color:'#FFD66F', }}
                    onValueChange={(itemValue, itemIndex) => select(carac.nameToLogic, itemValue)}
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
