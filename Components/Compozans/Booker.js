import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { useDispatch } from 'react-redux';
import { replaceBook } from '../../Store/Actions/InGameActions';

import { books } from '../../Helpers/Data'
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import {localize} from '../../Helpers/Lang'

export default ({ fct, book, dataSup }) => {

    const localizer = localize[dataSup.lang].forAlert;
    const idCurrentBook = book;

    const dispatch = useDispatch();

    const press = (bookId) => {
        dispatch(replaceBook(bookId));
        fct();
    };

    const label = () => {
        return idCurrentBook == 5 ? localizer.lastBook : localizer.bookChoice;
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
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <FlatList
                    data={books}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Gradiator
                                label={localize[dataSup.lang].books[item.id]}
                                fct={() => press(item.id)}
                                styleObject={{ width: '100%', marginVertical: 10 }}
                                fSize={2}
                                grCouleur={dataSup.color}
                            />
                        )

                    }}
                />

            </View>

        </View>
    )
}
