import React, { useState, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Animated, TouchableHighlight } from 'react-native';

import { useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import PersoList from './PersoList';
import AllPurposeAlert from '../AllPurposeAlert';
import {localize} from '../../Helpers/Lang'

export default ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const inGameState = useSelector((state) => state.InGameRedux);

    const [display, setDisplay] = useState(false);
    const [dataAlert, setDataAlert] = useState({});

    const {lang, color} = useSelector((state) => state.SetterRedux);
    const dataSup = {'lang': lang, 'closeLabel': localize[lang].global.closeLabel, 'color': color.color, 'colorFull': color.colorFull}
    const localizer = localize[lang].sheet;
    const localizerSkills = localize[lang].skills;
    const localizerItems = localize[lang].items;
    const localizerAlert = localize[lang].forAlert;
    const localizeBook = localize[lang].books;

    const labelPara = () => { return (inGameState.paragraph !== '') ? `n° ${inGameState.paragraph}` : localizer.sectionLabel; };
    const labelNote = () => { return (inGameState.inGameNotes.length > 0) ? `${inGameState.inGameNotes.filter(elm => elm.show).length} ${localizer.noteLabel}` : localizer.noteLabel; };

    const paraSetter = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': localizer.paraTitle, 'message': localizer.paraMess, 'closeAlert': closeAlert, 'fct': 'Paragrapher', 'dataSup': {...dataSup, localizerAlert} });
    };

    const paraNotes = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': localizer.noteTitle, 'message': localizer.noteMess, 'closeAlert': closeAlert, 'fct': 'Noter', 'dataSup': {...dataSup, localizerAlert} });
    };

    const dice = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': localizer.diceTitle, 'message': localizer.diceMess, 'closeAlert': closeAlert, 'fct': 'Dicer', 'dataSup': {...dataSup, localizerAlert} });
    }; 

    const save = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': localizer.saveTitle, 'message': localizer.saveMess, 'closeAlert': closeAlert, 'fct': 'Saver', 'dataSup': {...dataSup, localizerAlert, localizeBook} });
    }

    const changeBook = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({ 'title': localizer.changeBookTitle, 'message': localizer.changeBookMess, 'closeAlert': closeAlert, 'fct': 'Booker', 'book': inGameState.book, 'dataSup': dataSup });
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
                <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                <TextCustom text={localizer.characs} size={4} bold />
                <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
            </View>

            {!inGameState.set && <TextCustom text={localizer.noSelection} size={4} bold />}

            {inGameState.set > 0 &&
                <>
                    <View style={styles.zone_button}>
                        <FlatList
                            data={inGameState.finalTeam}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <PersoList persoID={item.id} perso={item} navigation={navigation} nbr={inGameState.team.length} dataSup={dataSup} localizerSkills={localizerSkills} localizerItems={localizerItems} />
                            )}
                        />
                    </View>

                    <View style={{ ...Styles.divider, width: '100%', margin: 10 }}>
                        <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                        <TextCustom text={localizer.actions} size={4} bold />
                        <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
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
                            <TextCustom text={localizer.save} size={1} italic />
                        </View>

                        <View style={styles.icon_container}>
                            <TouchableHighlight
                                style={{ width: '25%' }}
                                onPress={() => dice()}
                            >
                                <Image source={require('../../Helpers/IMG/die.png')} style={styles.icon} />
                            </TouchableHighlight>
                            <TextCustom text={localizer.launchDice} size={1} italic />
                        </View>

                    </View>

                    <View style={{ ...Styles.divider, margin: 10 }}>
                        <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                        <TextCustom text={localizer.currentBook} size={4} bold />
                        <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                    </View>

                    <View style={styles.zone_livre}>

                        <TextCustom text={` - ${localize[lang].books[inGameState.book]} - `} size={2} italic />

                        <View style={{ width: 100 }}>
                            <Gradiator
                                label={localizer.changeBook}
                                fct={() => changeBook()}
                                styleObject={{ width: '100%', height: 30 }}
                                fSize={1}
                                grCouleur={color.color}
                            />
                        </View>

                    </View>
                </>
            }

        </View>
    )
}
