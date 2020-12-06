import React, { useState, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Animated, TouchableHighlight } from 'react-native';

import { useSelector } from 'react-redux';

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

    const labelPara = () => { return (inGameState.paragraph !== '') ? `n° ${inGameState.paragraph}` : 'Paragraphe'; };
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

    const dice = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': 'Lancé de dés', 'message': '', 'closeAlert': closeAlert, 'fct': 'Dicer' });
    }; 

    const save = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': 'Sauvegarde', 'message': 'Sauvegardez votre partie.', 'closeAlert': closeAlert, 'fct': 'Saver' });
    }

    const changeBook = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': 'Changement de livre', 'message': '', 'closeAlert': closeAlert, 'fct': 'Booker', 'book': inGameState.book });
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
            flex: inGameState.team.length,
        },
        zone_button_bas: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
        },
        icon_container: {
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        icon: {
            resizeMode: 'contain',
            width: 50,
            height: 50,
            alignSelf: 'center',
        },
        zone_livre: {
            flex: 1,
            width: '90%',
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 20,
        },
    })

    return (
        <View style={Styles.select_container}>

            {display &&
                <Animated.View style={{ ...Styles.custom_alert, opacity: fadeAnim }}>
                    {AllPurposeAlert(dataAlert)}
                </Animated.View>
            }
            <View style={{ ...Styles.divider, margin: 10 }}>
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
                                <PersoList perso={item} navigation={navigation} nbr={inGameState.team.length} />
                            )}
                        />
                    </View>

                    <View style={{ ...Styles.divider, width: '100%', margin: 10 }}>
                        <View style={Styles.hrLine} />
                        <TextCustom text={'Actions'} size={4} bold />
                        <View style={Styles.hrLine} />
                    </View>

                    <View style={styles.zone_button_bas}>

                        <View style={styles.icon_container}>
                            <TouchableHighlight
                                style={{ width: '25%' }}
                                onPress={() => paraSetter()}
                            >
                                <Image source={require('../../Helpers/IMG/paragraphe.png')} style={styles.icon} />
                            </TouchableHighlight>
                            <TextCustom text={labelPara()} size={1} italic />
                        </View>

                        <View style={styles.icon_container}>
                            <TouchableHighlight
                                style={{ width: '25%' }}
                                onPress={() => paraNotes()}
                            >
                                <Image source={require('../../Helpers/IMG/note.png')} style={styles.icon} />
                            </TouchableHighlight>
                            <TextCustom text={labelNote()} size={1} italic />
                        </View>

                        <View style={styles.icon_container}>
                            <TouchableHighlight
                                style={{ width: '25%' }}
                                onPress={() => save()}
                            >
                                <Image source={require('../../Helpers/IMG/save.png')} style={styles.icon} />
                            </TouchableHighlight>
                            <TextCustom text={'Sauvegarde'} size={1} italic />
                        </View>

                        <View style={styles.icon_container}>
                            <TouchableHighlight
                                style={{ width: '25%' }}
                                onPress={() => dice()}
                            >
                                <Image source={require('../../Helpers/IMG/die.png')} style={styles.icon} />
                            </TouchableHighlight>
                            <TextCustom text={'Lancé de dé'} size={1} italic />
                        </View>

                    </View>

                    <View style={{ ...Styles.divider, margin: 10 }}>
                        <View style={Styles.hrLine} />
                        <TextCustom text='livre en cours' size={4} bold />
                        <View style={Styles.hrLine} />
                    </View>

                    <View style={styles.zone_livre}>

                        <TextCustom text={` - ${inGameState.book} - `} size={2} italic />

                        <View style={{ width: 100 }}>
                            <Gradiator
                                label={'Changer'}
                                fct={() => changeBook()}
                                styleObject={{ width: '100%', height: 30 }}
                                fSize={2}
                            />
                        </View>

                    </View>
                </>
            }

        </View>
    )
}
