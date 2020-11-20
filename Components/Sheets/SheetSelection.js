import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import PersoList from './PersoList';

export default ({ navigation }) => {

    const inGameState = useSelector((state) => state.InGameRedux);

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
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginTop: 60,
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

            {inGameState.team.length > 0 &&
                <>
                    <View style={styles.zone_button}>
                        <FlatList
                            data={inGameState.team}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => (
                                <PersoList data={item} navigation={navigation} />
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
                            fct={() => navigation.navigate("Selection de base")}
                            styleObject={{width: '80%', margin: 10}}
                            fSize={15}
                        />
                    </View>
                </>
            }
            
        </View>
    )
}
