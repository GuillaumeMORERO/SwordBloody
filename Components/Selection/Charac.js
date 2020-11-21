import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableHighlight, TextInput, Image, StyleSheet } from 'react-native';
import { CheckBox, Input } from 'react-native-elements';

import { useSelector } from 'react-redux';

import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default ({item, valid}) => {

    const state = useSelector((state) => state.SelectorRedux);

    useEffect(() => {
        state.choosenTeam.forEach( perso => {
            if (perso.id === item.id) {
                setChecked(true);
                setDisabled(true);
                setName(perso.name);
            }
        });
    }, []);
    
    const [disabled, setDisabled] = useState(false);
    const [checked, setChecked] = useState(false); 
    const [displayed, setDisplayed] = useState(false); 
    const [name, setName] = useState(item.name); 

    const manage = (act) => {
        valid(act, {id: item.id, name: name, type: item.type});
        if (act === 'suppr') {setChecked(false);setDisabled(false);}
        if (act === 'accept') {setChecked(true);setDisabled(true);}
    };

    const displayer = () => {
        if (displayed) {
            return (
                <View>
                    <Input
                        onChangeText={ e => setName(e) }
                        value={name}
                        maxLength= {15}
                        disabled={disabled}
                    />
                    {checked ?
                        <TouchableHighlight onPress={() => manage('suppr')} style={styles.select_validation} >
                            {texter('Supprimer', name)}
                        </TouchableHighlight>
                        :
                        <TouchableHighlight onPress={() => manage('accept')} style={styles.select_validation} >
                            {texter('Valider', name)}
                        </TouchableHighlight>
                    }
                    
                </View> 
            )
        }
    }

    const texter = (label) => {
        return(
            <View style={styles.texter}>
                <TextCustom text={label} size= {15} />
                <TextCustom text={` - ${name} - `} size= {18} />
            </View>
        )
    }

    const styles = StyleSheet.create({
        texter: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkBox: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 10,
            paddingBottom: 10,
            paddingTop: 10,

            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3,
        },
        select_validation: {
            width: '100%',
            borderRadius: 10,
            paddingBottom: 10,
            paddingTop: 10,
        },
    });
    
    return (
        <View>
            <CheckBox 
                containerStyle={styles.checkBox}
                title={<TextCustom text={item.type} size= {15} />}
                onPress={() => setDisplayed(!displayed)}
                checked={checked}
                checkedColor={'#FFD66F'}
                uncheckedColor={'#FFD66F'}
            />
            {displayer()}
                
        </View>
    )
}