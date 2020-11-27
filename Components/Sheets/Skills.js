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

    const { finalTeam } = useSelector((state) => state.InGameRedux);

    const typeReçu = data.route.params.type;
    const [Perso, setPerso] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        finalTeam.forEach(dataSet => {
            if (dataSet.classe === typeReçu) {
                setPerso(dataSet);
                setIsLoading(false);
            }
        })
    }, []);

    const capa = () => {
        var items = new Array();
        Perso.skills.forEach((item, key) => {
            items.push({ id: key + 1, name: item.name, descr: item.descr });
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

    return (
        <View style={Styles.select_container}>

            {isLoading && spinner()}

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <TextCustom text={'<<'} size={30} />
            </Pressable>

            {!isLoading &&
                <View style={{ flex: 1, marginBottom: 20 }}>

                    <ScrollView>

                        <View style={Styles.divider}>
                            <View style={Styles.hrLine} />
                            <TextCustom text={'Capacités'} size={4} bold />
                            <View style={Styles.hrLine} />
                        </View>

                        <FlatList
                            data={capa()}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (<CapaComponent data={item} />)
                            }}
                        />

                    </ScrollView>

                </View>
            }

        </View>
    )
}