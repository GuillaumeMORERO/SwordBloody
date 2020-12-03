import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image, Pressable } from 'react-native';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {

    const books = data.route.params.books;
    const accept = data.route.params.accept;

    const pressHandler = (title) => {
        accept(title);
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
                <TextCustom text={'Selection du Livre'} size={4} bold />
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
                            label={item.title}
                            fct={() => pressHandler(item.title)}
                            styleObject={{}}
                            fSize={2}
                        />
                    )}
                />
            </View>

        </View>
    )
}