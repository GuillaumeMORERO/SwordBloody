import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image } from 'react-native';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {
console.log('dans data : ', data.route.params);
    const books = data.route.params.books;
    const accept = data.route.params.accept;

    const pressHandler = (title) => {
        accept('bookToChoose', title);
        data.navigation.navigate("Selection de base")
    };

    const styles = StyleSheet.create({
        select_title: {
            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 10,
            margin: 10,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 30,
            paddingRight: 30,

            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3
        },
        zone_text: {
            flex: 1,
            justifyContent: 'center',
        },
        zone_button : {
            flex: 6,
            width: '90%',
            marginBottom: 10,
        },
    });
   
    return (
        <View style={Styles.select_container}>

            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            <View style={styles.zone_text}>
                <TextCustom text='Choix du livre' size= {15} />
            </View>

            <View style={styles.zone_button}>
                <FlatList
                    contentContainerStyle = {{
                        height:'90%',
                        justifyContent: 'space-around',
                    }}
                    data={books}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Gradiator
                            label={item.title}
                            fct={() => pressHandler(item.title)}
                            styleObject={{}}
                            fSize={15}
                        />
                    )}
                />
            </View>

        </View>
    )
}