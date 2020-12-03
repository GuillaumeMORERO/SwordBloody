import React, { useState, useRef } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Animated, TouchableHighlight } from 'react-native';

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
    const [dataAlert, setDataAlert] = useState({});

    const labelPara = () => { return (inGameState.paragraph !== '') ? `Paragraphe actuel : ${inGameState.paragraph}` : 'Memoriser un paragraphe'; };
    const labelNote = () => { return (inGameState.inGameNotes.length > 0) ? `${inGameState.inGameNotes.filter(elm => elm.show).length} notes` : 'Notes'; };

    const paraSetter = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': 'Paragraphe', 'message': 'Notez le paragraphe en cours', 'closeAlert': closeAlert, 'fct': 'Paragrapher' });
    };

    const paraNotes = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': 'Notes', 'message': 'Prenez des notes !', 'closeAlert': closeAlert, 'fct': 'Noter' });
    };

    const changeBook = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': 'Changement de livre', 'message': 'Faudra pas oublier l\'xp !!!!', 'closeAlert': closeAlert, 'fct': 'Booker', 'book': inGameState.book });
    };

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

    const closeAlert = () => { fadeOut(); };

    const styles = StyleSheet.create({
        zone_button: {
            flex: 4,
            alignItems: 'center',
        },
        zone_button_bas: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        },
        zone_livre: {
            flex: 2,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 20,
        },
        icon: {
            resizeMode: 'contain',
            width: 50,
            height: 50,
            alignSelf: 'center',
        }
    })

    return (
        <View style={Styles.select_container}>

            {display &&
                <Animated.View style={{ ...Styles.custom_alert, opacity: fadeAnim }}>
                    {AllPurposeAlert(dataAlert)}
                </Animated.View>
            }
            <View style={Styles.divider}>
                <View style={Styles.hrLine} />
                <TextCustom text={'Personnages'} size={4} bold />
                <View style={Styles.hrLine} />
            </View>

            {!inGameState.set && <TextCustom text={'Aucune selection'} size={4} bold />}

            {inGameState.set > 0 &&
                <>
                    <View style={styles.zone_button}>
                        <FlatList
                            data={inGameState.team}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <PersoList perso={item} navigation={navigation} />
                            )}
                        />
                    </View>

                    <View style={{ ...Styles.hrLine, marginBottom: 10 }} />

                    <View style={styles.zone_button_bas}>

                        {/* <Gradiator
                                label={labelPara()}
                                fct={() => paraSetter()}
                                styleObject={{ width: '50%', margin: 10 }}
                                fSize={2}
                            />
                            <Gradiator
                                label={labelNote()}
                                fct={() => paraNotes()}
                                styleObject={{ width: '20%', margin: 10 }}
                                fSize={2}
                            /> */}
                        <TouchableHighlight
                            style={{ width: '50%' }}
                            onPress={() => paraSetter()}
                        >
                            <Image source={require('../../Helpers/IMG/paragraphe.png')} style={styles.icon} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{ width: '50%' }}
                            onPress={() => paraNotes()}
                        >
                            <Image source={require('../../Helpers/IMG/note.png')} style={styles.icon} />
                        </TouchableHighlight>

                    </View>

                    <View style={styles.zone_livre}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles.hrLine} />
                            <TextCustom text='livre en cours : ' size={2} />
                            <View style={Styles.hrLine} />
                        </View>

                        <TextCustom text={inGameState.book} size={3} />

                        <View style={{ width: 200 }}>
                            <Gradiator
                                label={'Changer de livre'}
                                fct={() => changeBook()}
                                styleObject={{ width: '100%' }}
                                fSize={2}
                            />
                        </View>

                    </View>
                </>
            }

        </View>
    )
}
