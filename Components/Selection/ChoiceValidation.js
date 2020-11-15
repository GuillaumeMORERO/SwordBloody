import React from 'react';
import { View, Text, FlatList, StyleSheet, Image  } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices } from '../../Store/Actions/InGameActions';

import { BaseLvlCharac } from  '../../Helpers/Logic';

import CustomCard from './CustomCard';
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default ( data ) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.SelectorRedux);

    const choosenBook = data.route.params.book;
    const resetFields = data.route.params.resetFields;

    const backAndReset = () => {
        resetFields();
        data.navigation.navigate("Selection de base");
    }
    const validation = () => {
        dispatch(validationChoices(state.book, state.choosenTeam));
        data.navigation.navigate("Fiches")
    }

    const styles = StyleSheet.create({
        book : {
            flex: 1,
            flexDirection: 'row',
            padding: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cards : {
            flex: 8,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
            paddingTop: 5,
        },
        card_list : {
            flex: 1,
            width: '90%',
        },
        button_zone : {
            flex: 4,
            width: '90%',
            justifyContent: 'center',
            marginBottom: 10,
        },
        button_zone_sub : {
            flexDirection: 'row',
            height: '40%',
            marginTop: 10,
            justifyContent: 'space-around',
        },
    })
     
    return (
        <View style={Styles.select_container}>
        <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            <View style={styles.book}>
                <TextCustom text='Livre de départ : ' size= {15} />
                <TextCustom text={choosenBook} size= {18} />
            </View>

            <View style={styles.cards}>
                <FlatList
                    style={styles.card_list}
                    contentContainerStyle = {{alignItems: 'center'}}
                    data={state.choosenTeam}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <CustomCard
                            item={item}
                            level={BaseLvlCharac(state.choosenTeam.length, choosenBook)}
                        />
                    )}
                />
            </View>

            <View style={styles.button_zone}>

                <View style={styles.button_zone_sub}>
                    
                    <Gradiator
                        label='Recommencer'
                        fct={() => backAndReset()}
                        styleObject={{width: '40%'}}
                        fSize={15}
                    />
                
                    <Gradiator
                        label='Modifier'
                        fct={() => data.navigation.navigate("Selection de base")}
                        styleObject={{width: '40%'}}
                        fSize={15}
                    />
                    
                </View>

                <View style={styles.button_zone_sub}>
                    <Gradiator
                        label='Accepter ces choix'
                        fct={() => validation()}
                        styleObject={{width: '95%'}}
                        fSize={15}
                    />
                </View>

            </View>

        </View>
    )
}

