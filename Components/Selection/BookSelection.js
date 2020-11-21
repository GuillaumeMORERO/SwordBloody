import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image } from 'react-native';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {

    const books = data.route.params.books;
    const accept = data.route.params.accept;

    const pressHandler = (title) => {
        accept('bookToChoose', title);
        data.navigation.navigate("Selection de base")
    };

    const styles = StyleSheet.create({
        zone_button : {
            //flex: 3,
            width: '90%',
            marginTop: 40,
        },
    });
   
    return (
        <View style={Styles.select_container}>
            {/* <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image> */}

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