import React from 'react';
import { View, FlatList, StyleSheet, Image, Pressable } from 'react-native';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import {localize} from '../../Helpers/Lang'
import { useDispatch } from 'react-redux';
import { setBook } from '../../Store/Actions/InGameActions';

export default (data) => {

    const books = data.route.params.books;
    const lang = data.route.params.lang;
    const color = data.route.params.color;

    const dispatch = useDispatch();

    const pressHandler = (bookId) => {
        dispatch(setBook(bookId));
        data.navigation.navigate("Selection de base")
    };

    const styles = StyleSheet.create({
        zone_button: {
            flex: 1,
            width: '90%',
            marginTop: 20,
        },
    });

    return (
        <View style={Styles.select_container}>

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <Image source={require('../../Helpers/IMG/backIcon.png')} style={Styles.back} />
            </Pressable>

            <View style={Styles.divider}>
                <View style={Styles.hrLine} />
                <TextCustom text={localize[lang].selection.bookSelect} size={4} bold />
                <View style={Styles.hrLine} />
            </View>

            <View style={styles.zone_button}>
                <FlatList
                    contentContainerStyle={{
                        height: '90%',
                        justifyContent: 'space-around',
                    }}
                    data={books}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Gradiator
                            label={localize[lang].books[item.id]}
                            fct={() => pressHandler(item.id)}
                            styleObject={{}}
                            fSize={2}
                            grCouleur={color}
                        />
                    )}
                />
            </View>

        </View>
    )
}