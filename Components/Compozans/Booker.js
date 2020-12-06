import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';
import { replaceBook } from '../../Store/Actions/InGameActions';

import { books } from '../../Helpers/Data'
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct, book }) => {

    const currentBook = book;
    const idCurrentBook = books.find(book => book.title === currentBook).id;
    const listBook = books.filter(book => book.title !== currentBook);
    const dispatch = useDispatch();

    const press = (book) => {
        dispatch(replaceBook(book));
        fct();
    };

    const label = () => {
        let label = '';
        idCurrentBook === books.length ? label = 'Vous êtes au dernier livre !' : label = 'Choix possible : ';
        return label
    };


    const styles = StyleSheet.create({
        container: {
            width: '90%',
            height: '100%',
            alignSelf: 'center',
        }
    })

    return (
        <View style={styles.container}>

            <TextCustom text={label()} size={2} />

            <View style={{
                //flex: 1, 
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <FlatList
                    data={listBook}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Gradiator
                                label={item.title}
                                fct={() => press(item)}
                                styleObject={{ width: '100%', marginVertical: 15 }}
                                fSize={2}
                            />
                        )

                    }}
                />
            </View>


        </View>
    )
}
