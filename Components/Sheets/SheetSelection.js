import React, {useState, useRef} from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Animated } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import PersoList from './PersoList';
import AllPurposeAlert from '../AllPurposeAlert';

export default ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const inGameState = useSelector((state) => state.InGameRedux);
    const [display, setDisplay] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    const labelPara = () => {
        return (inGameState.paragraph !== '') ? 'Paragrpahe actuel : '+inGameState.paragraph : 'Noter le paragraphe';
    }

    const paraSetter = () => {
        fadeIn();
        setDisplay(true);
        setTitle('Paragraphe');
        setMessage('Notez le paragraphe en cours');
    }

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start();
    };
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => setDisplay(false));
    };

    const closeAlert = () => {
        fadeOut();
    }

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
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/caracIcon.png')} />

            {display &&
                <Animated.View style={{...Styles.custom_alert, opacity: fadeAnim}}>
                    {AllPurposeAlert(title, message, closeAlert, 'Paragrapher')}
                </Animated.View>
            }

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
                    <Gradiator
                            label={labelPara()}
                            fct={() => paraSetter(true)}
                            styleObject={{width: '80%', margin: 10}}
                            fSize={15}
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
