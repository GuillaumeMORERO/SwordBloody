import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Animated, Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices, setBook } from '../../Store/Actions/InGameActions';

import { books } from '../../Helpers/Data';
import { slugger } from '../../Helpers/Logic';
import Gradiator from '../Gradiator';
import AllPurposeAlert from '../AllPurposeAlert';
import Styles from '../Styles';
import { BaseLvlCharac } from '../../Helpers/Logic';
import TexteCustom from '../TexteCustom';

export default ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const dispatch = useDispatch();
    const inGameState = useSelector((state) => state.InGameRedux);

    const [displayAlert, setDisplayAlert] = useState(false);
    const [nameToDisplay, setNameToDisplay] = useState([]);
    const [dataAlert, setDataAlert] = useState({});

    useEffect(() => {
        setNameToDisplay([]);
        inGameState.team.forEach(perso => {
            setNameToDisplay(name => [...name, perso.name])
        });
    }, [inGameState.team]);

    const accept = (book) => { dispatch(setBook(book));};

    const resetFields = () => {
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({'title': 'Remise à zero', 'message': 'Supprimer la selection ?', 'closeAlert': closeAlert, 'fct': 'Reseter'})
    };

    const validationHandler = () => {
 
        if (inGameState.book === '') {
            fadeIn();
            setDisplayAlert(true);
            setDataAlert({'title': 'Choix du livre', 'message': 'Vous devez choisir un livre de départ.', 'closeAlert': closeAlert})
        }
        else if (inGameState.team.length === 0) {
            fadeIn();
            setDisplayAlert(true);
            setDataAlert({'title': 'Choix de personnage', 'message': 'Vous devez choisir au moins un personnage.', 'closeAlert': closeAlert})
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
                if (inGameState.set) { label = 'Votre Livre est déjà choisi'; }
                else { inGameState.book === undefined || inGameState.book === '' ? label = 'Livre de départ' : label = inGameState.book }
                return (label)
            };
            case 'team': {
                if (inGameState.set) { label = 'Votre équipe est déjà définie'; }
                else if (inGameState.team.length === 0) { label = 'Selection de Personnage(s)'; }
                else { label = "Vous avez choisi " + slugger(inGameState.team.length) + " personage(s) : " + nameToDisplay.join(', '); }
                return (label)
            }
        }
    };

    const teamChoice = (action) => {

        if (action === 'book') {

            if (!inGameState.set) {
                navigation.navigate("Selection du Livre", { accept, books })
            } else {
                fadeIn();
                setDisplayAlert(true);
                setDataAlert({'title': 'Choix du livre', 'message': 'Vous ne pouvez plus changer de livre \n à moins de recommencer !!.', 'closeAlert': closeAlert})
            }
        };
        if (action === 'team') {

            if (!inGameState.set) {
                navigation.navigate("Selection de Personnage")
            } else {
                fadeIn();
                setDisplayAlert(true);
                setDataAlert({'title': 'Choix de personnage', 'message': 'Vous ne pouvez plus changer d\'équipe \n à moins de recommencer !!', 'closeAlert': closeAlert})
            }
        };
    }

    const closeAlert = () => {fadeOut();};
    
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
        let check = [ 'Valider', 'book', 'team' ]

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
            if (gradiator === 'Valider') { inGameState.set ? fonction : fonction = validationHandler()}
            else if (gradiator === 'Reset') { !inGameState.set ? fonction : fonction = resetFields()}
            return fonction;
        };
    };

    const styles = StyleSheet.create({
        zone_title: {
            flex: 2,
            justifyContent: 'space-around',
            width: '90%',
            alignItems: 'center',
        },
        zone_button: {
            flex: 4,
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
                <Image style={{ width: 300, marginTop: 40, resizeMode: 'contain', }} source={require('../../Helpers/IMG/final_splash.png')} />
            </View>

            <TexteCustom text={'selection'} size={3} typo={'BLOODY'} />
            <Text style={{fontSize: 20, fontFamily: 'BLOODY', color: 'white'}}>AAAff</Text>

            <View style={styles.zone_button}>
                <Gradiator
                    label={choiceDisplayer('book')}
                    fct={() => teamChoice('book')}
                    styleObject={{ height: 60, width: '90%' }}
                    fSize={2}
                    fCouleur={configGradiator('fontColor', 'book')} 
                    grCouleur={configGradiator('gradientColor', 'book')}
                />
                <Gradiator
                    label={choiceDisplayer('team')}
                    fct={() => teamChoice('team')}
                    styleObject={{ height: 60, width: '90%' }}
                    fSize={2}
                    fCouleur={configGradiator('fontColor', 'team')} 
                    grCouleur={configGradiator('gradientColor', 'team')}
                />
            </View>

            <View style={styles.zone_validation}>
                <Gradiator
                    label="Valider"
                    fct={() => configGradiator('fct', 'Valider')}
                    styleObject={{ height: 40, width: '40%', margin: 10 }}
                    fSize={2}
                    fCouleur={configGradiator('fontColor', 'Valider')} 
                    grCouleur={configGradiator('gradientColor', 'Valider')}
                />
                <Gradiator
                    label="Reset"
                    fct={() => configGradiator('fct', 'Reset')}
                    styleObject={{ height: 40, width: '40%', margin: 10 }}
                    fSize={2} 
                    fCouleur={configGradiator('fontColor', 'reset')} 
                    grCouleur={configGradiator('gradientColor', 'reset')}
                />
            </View>
        </View>
    )
}