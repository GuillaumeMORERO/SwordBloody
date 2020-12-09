import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices, setBook } from '../../Store/Actions/InGameActions';

import { books } from '../../Helpers/Data';
import Gradiator from '../Gradiator';
import AllPurposeAlert from '../AllPurposeAlert';
import Styles from '../Styles';
import { BaseLvlCharac } from '../../Helpers/Logic';
import TexteCustom from '../TexteCustom';

export default ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const dispatch = useDispatch();
    const inGameState = useSelector((state) => state.InGameRedux);
    const { slot1, slot2, slot3 } = useSelector((state) => state.SaveRedux);

    const [displayAlert, setDisplayAlert] = useState(false);
    const [nameToDisplay, setNameToDisplay] = useState([]);
    const [dataAlert, setDataAlert] = useState({});

    useEffect(() => {
        setNameToDisplay([]);
        inGameState.team.forEach(perso => {
            setNameToDisplay(name => [...name, perso.name])
        });
    }, [inGameState.team]);

    const accept = (book) => { dispatch(setBook(book)); };

    const resetFields = () => {
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': 'Remise à zero', 'message': 'Supprimer la selection ?', 'closeAlert': closeAlert, 'fct': 'Reseter' })
    };

    const validationHandler = () => {

        if (inGameState.book === '') {
            fadeIn();
            setDisplayAlert(true);
            setDataAlert({ 'title': 'Choix du livre', 'message': 'Vous devez choisir un livre de départ.', 'closeAlert': closeAlert })
        }
        else if (inGameState.team.length === 0) {
            fadeIn();
            setDisplayAlert(true);
            setDataAlert({ 'title': 'Choix de personnage', 'message': 'Vous devez choisir au moins un personnage.', 'closeAlert': closeAlert })
        }
        else {
            dispatch(validationChoices(inGameState.book, inGameState.team, BaseLvlCharac(inGameState.team.length, inGameState.book)));
            navigation.navigate("Fiches");
        }
    };

    const choiceDisplayer = (category) => {
        var label = '';
        switch (category) {
            case 'book': {
                if (inGameState.set) { label = `Livre choisi : ${inGameState.book}`; }
                else { inGameState.book === undefined || inGameState.book === '' ? label = 'Livre de départ' : label = inGameState.book }
                return (label)
            };
            case 'team': {
                if (inGameState.set) { label = nameToDisplay.join(', '); }
                else if (inGameState.team.length === 0) { label = 'Selection de Personnage(s)'; }
                else { label = nameToDisplay.join(', '); }
                return (label)
            }
        }
    };

    const teamChoice = (action) => {

        if (action === 'book') {

            if (!inGameState.set) {
                navigation.navigate("Selection du Livre", { 'accept': accept, 'books': books })
            } else {
                fadeIn();
                setDisplayAlert(true);
                setDataAlert({ 'title': 'Choix du livre', 'message': 'Vous ne pouvez plus changer de livre \n à moins de recommencer !!.', 'closeAlert': closeAlert })
            }
        };
        if (action === 'team') {

            if (!inGameState.set) {
                navigation.navigate("Selection de Personnage")
            } else {
                fadeIn();
                setDisplayAlert(true);
                setDataAlert({ 'title': 'Choix de personnage', 'message': 'Vous ne pouvez plus changer d\'équipe \n à moins de recommencer !!', 'closeAlert': closeAlert })
            }
        };
    }

    const closeAlert = () => { fadeOut(); };

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
        }).start(() => setDisplayAlert(false));
    };

    const configGradiator = (action, gradiator) => {
        let colorFont = 'grey';
        let colorGr = 'grey';
        let fonction = null;
        let check = ['Valider', 'book', 'team']

        if (action === 'fontColor') {
            if (check.includes(gradiator)) { !inGameState.set ? colorFont = '#FFD66F' : colorFont }
            else { inGameState.set ? colorFont = '#FFD66F' : colorFont }
            return colorFont;
        };
        if (action === 'gradientColor') {
            if (check.includes(gradiator)) { !inGameState.set ? colorGr = '#rgba(255, 0, 0, 0.3)' : colorGr }
            else { inGameState.set ? colorGr = '#rgba(255, 0, 0, 0.3)' : colorGr }
            return colorGr;
        };
        if (action === 'fct') {
            if (gradiator === 'Valider') { inGameState.set ? fonction : fonction = validationHandler() }
            else if (gradiator === 'Reset') { !inGameState.set ? fonction : fonction = resetFields() }
            return fonction;
        };
    };

    const loadSave = (slot) => {
        let currentSlot;
        slot === 1 ? currentSlot = slot1 :
            slot === 2 ? currentSlot = slot2 :
                slot === 3 ? currentSlot = slot3 : null;

        currentSlot.set ? load(slot) : null;
    }

    const load = (slot) => {
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': 'Chargement de sauvegarde', 'message': `Charger la sauvegarde n° ${slot} ? \nLa partie en cours sera supprimée !`, 'closeAlert': closeAlert, 'fct': 'Loader', 'slot': slot })
    }

    const styles = StyleSheet.create({
        zone_title: {
            flex: 3,
            justifyContent: 'space-around',
            width: '100%',
            alignItems: 'center',
        },
        zone_button: {
            flex: 2,
            justifyContent: 'space-evenly',
            width: '90%',
            alignItems: 'center',
        },
        zone_validation: {
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        zone_load: {
            flex: 1,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
        },
    });

    return (
        <View style={Styles.select_container}>

            {displayAlert &&
                <Animated.View style={{ ...Styles.custom_alert, opacity: fadeAnim }}>
                    {AllPurposeAlert(dataAlert)}
                </Animated.View>
            }

            <View style={styles.zone_title}>
                <Image style={{ width: 300,  resizeMode: 'contain', }} source={require('../../Helpers/IMG/final_splash.png')} />
            </View>

            <View style={styles.zone_button}>
                <Gradiator
                    label={choiceDisplayer('book')}
                    fct={() => teamChoice('book')}
                    styleObject={{ height: 40, width: '90%' }}
                    fSize={1}
                    fCouleur={configGradiator('fontColor', 'book')}
                    grCouleur={configGradiator('gradientColor', 'book')}
                />
                <Gradiator
                    label={choiceDisplayer('team')}
                    fct={() => teamChoice('team')}
                    styleObject={{ height: 40, width: '90%' }}
                    fSize={1}
                    fCouleur={configGradiator('fontColor', 'team')}
                    grCouleur={configGradiator('gradientColor', 'team')}
                />
            </View>

            <View style={styles.zone_validation}>
                <Gradiator
                    label="Valider"
                    fct={() => configGradiator('fct', 'Valider')}
                    styleObject={{ height: 30, width: '40%', margin: 10 }}
                    fSize={2}
                    fCouleur={configGradiator('fontColor', 'Valider')}
                    grCouleur={configGradiator('gradientColor', 'Valider')}
                />
                <Gradiator
                    label="Reset"
                    fct={() => configGradiator('fct', 'Reset')}
                    styleObject={{ height: 30, width: '40%', margin: 10 }}
                    fSize={2}
                    fCouleur={configGradiator('fontColor', 'reset')}
                    grCouleur={configGradiator('gradientColor', 'reset')}
                />
            </View>

            <View style={Styles.divider}>
                <View style={Styles.hrLine} />
                <TexteCustom text={'charger une sauvegarde'} size={2} />
                <View style={Styles.hrLine} />
            </View>

            <View style={styles.zone_load}>

                <View style={{ flexDirection: 'row' }}>
                    <Gradiator
                        label="N° 1"
                        fct={() => loadSave(1)}
                        styleObject={{ height: 30, width: '25%', margin: 10 }}
                        fSize={2}
                        fCouleur={slot1.set ? '#FFD66F' : 'grey'}
                        grCouleur={slot1.set ? '#rgba(255, 0, 0, 0.3)' : 'grey'}
                    />
                    <Gradiator
                        label="N° 2"
                        fct={() => loadSave(2)}
                        styleObject={{ height: 30, width: '25%', margin: 10 }}
                        fSize={2}
                        fCouleur={slot2.set ? '#FFD66F' : 'grey'}
                        grCouleur={slot2.set ? '#rgba(255, 0, 0, 0.3)' : 'grey'}
                    />
                    <Gradiator
                        label="N° 3"
                        fct={() => loadSave(3)}
                        styleObject={{ height: 30, width: '25%', margin: 10 }}
                        fSize={2}
                        fCouleur={slot3.set ? '#FFD66F' : 'grey'}
                        grCouleur={slot3.set ? '#rgba(255, 0, 0, 0.3)' : 'grey'}
                    />
                </View>
            </View>


        </View>
    )
}