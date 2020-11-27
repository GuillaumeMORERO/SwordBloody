import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableHighlight, TextInput, Image, StyleSheet } from 'react-native';
import { CheckBox, Input } from 'react-native-elements';

import { useSelector } from 'react-redux';

import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default ({item, valid}) => {

    const inGameState = useSelector((state) => state.InGameRedux);

    useEffect(() => {
        inGameState.team.forEach( perso => {
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

    const manage = (action) => {
        valid(action, {id: item.id, name: name, type: item.type});
        if (action === 'suppr') {setChecked(false);setDisabled(false);}
        if (action === 'accept') {setChecked(true);setDisabled(true);}
    };

    const displayer = () => {
        if (displayed) {
            return (
                <View style={{margin: 10}}>
                    <TextInput
                        onChangeText={ e => setName(e) }
                        value={name}
                        maxLength= {15}
                        disabled={disabled}
                        textAlign={'center'}
                        style={{color: '#FFD66F'}}
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
                <TextCustom text={label} size= {2} />
                <TextCustom text={` - ${name} - `} size= {3} />
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
            paddingBottom: 10,
            paddingTop: 10,
            borderWidth: 0,
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center',
        },
        select_validation: {
            borderRadius: 5,
            paddingBottom: 10,
            paddingTop: 10,
        },
    });
    const fontColor = checked ? '#FFD66F' : '#rgba(255, 214, 111, 0.5)';
    return (
        <View>
            <CheckBox 
                containerStyle={styles.checkBox}
                inputContainerStyle={{width:'100%'}}
                title={<TextCustom text={item.type} size= {2} couleur={fontColor} />}
                onPress={() => setDisplayed(!displayed)}
                checked={checked}
                checkedColor={'#FFD66F'}
                uncheckedColor={'#rgba(255, 214, 111, 0.5)'}
            />
            {displayer()}
            <View style={{...Styles.hrLine, width: '80%'}} />
                
        </View>
    )
}