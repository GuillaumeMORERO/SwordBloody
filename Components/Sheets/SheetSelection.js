import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default ({ navigation }) => {

    const dispatch = useDispatch();
    const inGameState = useSelector((state) => state.InGameRedux);
    const selectorState = useSelector((state) => state.SelectorRedux);

    //console.log('state :', inGameState.team);

    
    const styles = StyleSheet.create({
        zone_titre: {
            flex: 1,
            justifyContent: 'space-evenly',
            width: '90%',
            alignItems: 'center',
            //backgroundColor: 'red',
        },
        zone_button: {
            flex: 3,
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 20,
            width: '70%',
        },
        zone_button_bas: {
            flex:1,
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
    })

    return (
        <View style={Styles.select_container}>
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            <View style={styles.zone_titre}>
                <TextCustom text='Personnages' size= {28} />
            </View>
            
            <View style={styles.zone_button}>
                <FlatList
                    data={inGameState.team}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Gradiator
                            label={item.name}
                            fct={() => navigation.navigate("fiche", {item})}
                            styleObject={{width: '90%', margin: 10}}
                            fSize={15}
                        />
                    )}
                />
            </View>

            <View style={styles.zone_button_bas}>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <TextCustom text='livre en cours : ' size={15} />
                    <TextCustom text={inGameState.book} size={18} />
                </View>
                <Gradiator
                    label={'Changer de livre'}
                    fct={() => navigation.navigate("Selection du Livre")}
                    styleObject={{width: '80%', margin: 10}}
                    fSize={15}
                />
            </View>
          
        </View>
    )
}
