import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, ActivityIndicator, SafeAreaView, Pressable, Animated } from 'react-native';
import { Tooltip, Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import ItemComponent from './ItemComponent';
import CapaComponent from './CapaComponent';
import AllPurposeAlert from '../AllPurposeAlert';
import Styles from '../Styles';

export default (data) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const { finalTeam } = useSelector((state) => state.InGameRedux);

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
        Perso.inventaire.forEach((item, key) => {
            items.push({ id: key + 1, item: item });
        });
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

    const suppItem = (name, id) => {
        fadeIn();
        setDisplayAlert(true);
        setDataAlert({'title': 'Suppression', 'message': `Supprimer ${name} ?`, 'closeAlert': closeAlert, 'fct': 'Deleter', 'id': id, classe: Perso.classe});
    };

    return (
        <View style={Styles.select_container}>

            {displayAlert &&
                <Animated.View style={{ ...Styles.custom_alert, opacity: fadeAnim }}>
                    {AllPurposeAlert(dataAlert)}
                </Animated.View>
            }

            {isLoading && spinner()}

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <TextCustom text={'<<'} size={30} />
            </Pressable>

            {!isLoading &&
                <View style={{ flex: 1, marginBottom: 20 }}>

                    <ScrollView>

                        <View style={Styles.divider}>
                            <View style={Styles.hrLine} />
                            <TextCustom text={'Inventaire'} size={4} bold />
                            <View style={Styles.hrLine} />
                        </View>

                        <FlatList
                            data={itemList()}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (<ItemComponent data={item} persoClasse={Perso.classe} suppItem={suppItem} />)
                            }}
                        />

                    </ScrollView>

                </View>
            }

        </View>
    )
}