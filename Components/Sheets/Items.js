import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, FlatList, ActivityIndicator, Pressable, Animated, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import ItemComponent from './ItemComponent';
import AllPurposeAlert from '../AllPurposeAlert';
import Styles from '../Styles';

import { qteUseObject } from '../../Store/Actions/InGameActions';

export default (data) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const { finalTeam, book } = useSelector((state) => state.InGameRedux);
    const dispatch = useDispatch();

    const typeReçu = data.route.params.type;
    const [Perso, setPerso] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [displayAlert, setDisplayAlert] = useState(false);
    const [dataAlert, setDataAlert] = useState({});

    useEffect(() => {
        finalTeam.forEach(dataSet => {
            if (dataSet.classe === typeReçu) {
                setPerso(dataSet);
                setIsLoading(false);
            }
        })
    }, []);

    const itemList = () => {
        var items = new Array();
        if (Array.isArray(Perso.inventaire)) {
            Perso.inventaire.forEach((item, key) => {
                items.push({ id: key + 1, item: item });
            });
        }
        return items;
    }

    const spinner = () => {
        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" color='#FFD66F' />
                </View>
            )
        }
    };

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

    const suppItem = (name, id, type) => {
        fadeIn();
        setDisplayAlert(true);
        let loss = '';
        type === 'armure' ? loss = 'Cela entraînera la perte \n de vos points de protection' :
            type === 'arme' ? loss = 'Cela entraînera la perte \n de 2 points de force, et 2 points de dégâts.' : loss;

        setDataAlert({ 'title': 'Suppression', 'message': `Supprimer ${name} ? \n ${loss}`, 'closeAlert': closeAlert, 'fct': 'Deleter', 'id': id, 'classe': Perso.classe });
    };

    const toAddItem = () => {
        let nbrObject = Perso.inventaire.length;
        let message = ''; let fct = '';
        nbrObject === 10 ? message = 'Vous avez dix objets, vous ne pouvez plus en ajouter.' : fct = 'Adder';
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': 'Ajout d\'un objet', 'message': message, 'closeAlert': closeAlert, 'fct': fct, 'classe': Perso.classe });
    };

    const exchangeItem = (item) => {
        let nbrPerso = finalTeam.length;
        let message = `Avec qui voulez-vous échanger\n '${item.name}'`; let fct = '';
        nbrPerso === 1 ? message = 'Vous n\' avez qu\' un seul Personnage dans l\'équipe !' : fct = 'Exchanger';
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({ 'title': 'Echange d\' objet', 'message': message, 'closeAlert': closeAlert, 'fct': fct, 'classe': Perso.classe, 'id': item.id });
    };

    const modifQte = (value, id) => {
        dispatch(qteUseObject(value, id, Perso.classe));
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

            {isLoading && spinner()}

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <Image source={require('../../Helpers/IMG/backIcon.png')} style={Styles.back} />
            </Pressable>

            {!isLoading &&
                <View style={{ flex: 1, marginBottom: 20 }}>

                    <ScrollView>

                        <View style={Styles.divider}>
                            <View style={Styles.hrLine} />
                            <TextCustom text={'Inventaire'} size={4} bold />
                            <View style={Styles.hrLine} />
                        </View>

                        {/* <Gradiator
                            label='+'
                            fct={() => toAddItem()}
                            styleObject={{ width: '10%', alignSelf: 'center', height: 30 }}
                            fSize={30}
                            fCouleur={Perso.inventaire.length < 10 ? '#FFD66F' : 'grey'}
                            grCouleur={Perso.inventaire.length < 10 ? '#rgba(255, 0, 0, 0.3)' : 'grey'}
                        /> */}
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
                                return (<ItemComponent data={item} suppItem={suppItem} modifQte={modifQte} teamLength={finalTeam.length} exchangeItem={exchangeItem} />)
                            }}
                        />

                    </ScrollView>
                </View>
            }

        </View>
    )
}


