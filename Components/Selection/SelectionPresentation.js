import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { reset, choosenBook } from '../../Store/Actions/SelectActions'

import {books} from '../../Helpers/Data';
import {slugger} from '../../Helpers/Logic';
import Gradiator from '../Gradiator';
import AllPurposeAlert from '../AllPurposeAlert';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const dispatch = useDispatch();
    const state = useSelector((state) => state.SelectorRedux);

    const [displayAlert, setDisplayAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [nameToDisplay, setNameToDisplay] = useState([]);

    useEffect(() => {
        setNameToDisplay([]);
        state.choosenTeam.forEach( perso => {
            setNameToDisplay(name => [...name, perso.name])
        });
    }, [state.choosenTeam]);

    const accept = (type,  book) => {
        if (type === 'bookToChoose') {
            dispatch(choosenBook(book));
        }
    };

    const resetFields = () => {
        setNameToDisplay([]);
        dispatch(reset());
    };

    const closeAlert = () => {
        fadeOut();
    }

    const validationHandler = () => {
        if (state.book === '') {
            fadeIn();
            setDisplayAlert(true);
            setTitle('Choix du livre');
            setMessage('Vous devez choisir un livre de départ.');
        } 
        else if (state.choosenTeam.length === 0) {
            fadeIn();
            setDisplayAlert(true);
            setTitle('Choix de personnage');
            setMessage('Vous devez choisir au moins un personnage.');
        } 
        else {navigation.navigate("Validation", {book: state.book, resetFields: resetFields});}
    };

    const choiceDisplayer = (category) => {
        if (category === 'livre') {return (state.book === undefined || state.book === '' ? 'Livre de départ' : state.book)}
        if (category === 'team') {return (state.choosenTeam.length === 0 ? 'Selection de Personnage(s)' 
            : 
            "Vous avez choisi " + slugger(state.choosenTeam.length) + " personage(s) : " + nameToDisplay.join(', ') )}
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
        }).start(() => setDisplayAlert(false));
    };

    const styles = StyleSheet.create({
        zone_title : {
            flex: 1,
            justifyContent: 'space-evenly',
            width: '90%',
            alignItems: 'center',
        },
        zone_button : {
            flex: 2,
            justifyContent: 'space-evenly',
            width: '90%',
            alignItems: 'center',
        },
        zone_validation : {
            flex: 1,
            width: '90%',
            justifyContent: 'center',
        },
        custom_alert : {
            position: 'absolute',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            elevation: 4,
            backgroundColor : '#rgba(0, 0, 0, 0.7)',
        }
    });

    return (
        <View style={Styles.select_container}>
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            {displayAlert &&
                <Animated.View style={{...styles.custom_alert, opacity: fadeAnim}}>
                    {AllPurposeAlert(title, message, closeAlert )}
                </Animated.View>
            }
            
            <View style={styles.zone_title}>
                <TextCustom text="Bienvenue dans l'univers de l'Epée de Légende" size= {28} />
                <TextCustom text='Commencez vos choix :' size= {15} />

            </View>

            <View style={styles.zone_button}>
                <Gradiator
                    label={choiceDisplayer('livre')}
                    fct={() => navigation.navigate("Selection du Livre", {accept, books})}
                    styleObject={{width: '90%'}}
                    fSize={15}
                />
                <Gradiator
                    label={choiceDisplayer('team')}
                    fct={() => navigation.navigate("Selection de Personnage")}
                    styleObject={{height: 60, width: '90%'}}
                    fSize={15}
                />
            </View>

            <View style={styles.zone_validation}>
                <Gradiator
                    label="Vue d'ensemble"
                    fct={() => validationHandler()}
                    styleObject={{height: 50}}
                    fSize={15}
                />
            </View>
        </View>
    )
}