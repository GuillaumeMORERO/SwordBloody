import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, FlatList, ActivityIndicator, Pressable, Animated, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import TextCustom from '../TexteCustom';
import ItemComponent from './ItemComponent';
import AllPurposeAlert from '../AllPurposeAlert';
import Styles from '../Styles';

import { qteUseObject } from '../../Store/Actions/InGameActions';

export default (data) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const { finalTeam } = useSelector((state) => state.InGameRedux);
    const persoID = data.route.params.persoID

    const dispatch = useDispatch();

    const finalTeamLength = data.route.params.finalTeamLength;
    const localizerItems = data.route.params.localizerItems;
    const dataSup = {...data.route.params.dataSup, localizerItems, 'closeLabel': localizerItems.closeLabel};

    const [displayAlert, setDisplayAlert] = useState(false);
    const [dataAlert, setDataAlert] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [Perso, setPerso] = useState({});

    useEffect(() => {
        finalTeam.forEach(dataSet => {
            if (dataSet.id === persoID) {
                setPerso(dataSet);
                setIsLoading(false);
            }
        })
    }, []);
    const spinner = () => {
        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" color='#FFD66F' />
                </View>
            )
        }
    }

    const itemList = () => {
        var items = new Array();
        if (Array.isArray(Perso.inventaire)) {
            Perso.inventaire.forEach((item, key) => {
                items.push({ id: key + 1, item: item });
            });
        }
        return items;
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

    const tooltiper = (descr) => {
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': '', 'message': '', 'closeAlert': closeAlert, 'fct': 'Tooltiper', 'dataSup': {...dataSup, descr} });
    };

    const suppItem = (name, id, type) => {
        fadeIn();
        setDisplayAlert(true);
        let loss = '';
        type === 'armure' ? loss = localizerItems.lossArmour : type === 'arme' ? loss = localizerItems.lossWeapon : loss;

        setDataAlert({ 'title': localizerItems.itemDeleteTitle, 'message': `${localizerItems.itemDeleteMess} ${name} ? \n ${loss}`, 'closeAlert': closeAlert, 'fct': 'Deleter', 'id': id, 'persoId': Perso.id, 'dataSup': dataSup });
    };

    const toAddItem = () => {
        let nbrObject = Perso.inventaire.length;
        let message = ''; let fct = '';
        nbrObject === 10 ? message = localizerItems.tooMuchObjects : fct = 'Adder';
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': localizerItems.addItem, 'message': message, 'closeAlert': closeAlert, 'fct': fct, 'persoId': Perso.id, 'dataSup': dataSup });
    };

    const exchangeItem = (item) => {
        let nbrPerso = finalTeamLength;
        let message = `${localizerItems.withWhomToChange} \n ${item.name} ?`; let fct = '';
        nbrPerso === 1 ? message = localizerItems.justOneCharac : fct = 'Exchanger';
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': localizerItems.tradingTitle, 'message': message, 'closeAlert': closeAlert, 'fct': fct, 'persoId': Perso.id, 'id': item.id, 'dataSup': dataSup });
    };

    const modifQte = (value, id) => {
        dispatch(qteUseObject(value, id, Perso.id));
    }

    const styles = StyleSheet.create({
        icon: {
            resizeMode: 'contain',
            width: 40,
            height: 40,
            alignSelf: 'center',
        },

    });

    return (
        <View style={Styles.select_container}>

            {displayAlert &&
                <Animated.View style={{ ...Styles.custom_alert, opacity: fadeAnim }}>
                    {AllPurposeAlert(dataAlert)}
                </Animated.View>
            }

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <Image source={require('../../Helpers/IMG/backIcon.png')} style={Styles.back} />
            </Pressable>

            {isLoading && spinner()}

            {!isLoading &&
                <View style={{ flex: 1, marginBottom: 20 }}>

                    <View>
                        <View style={Styles.divider}>
                            <View style={Styles.hrLine} />
                            <TextCustom text={localizerItems.itemsTitle} size={4} bold />
                            <View style={Styles.hrLine} />
                        </View>

                        <TouchableHighlight
                            style={{ width: '50%', alignSelf: 'center', opacity: Perso.inventaire.length < 10 ? 1 : 0.5}}
                            onPress={() => toAddItem()}
                        >
                            <Image source={require('../../Helpers/IMG/add.png')} style={styles.icon} />
                        </TouchableHighlight>

                        <FlatList
                            data={itemList()}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (<ItemComponent data={item} suppItem={suppItem} modifQte={modifQte} tooltiper={tooltiper} teamLength={finalTeamLength} exchangeItem={exchangeItem} dataSup={dataSup} />)
                            }}
                        />

                    </View>
                </View>
            }

        </View>
    )
}


