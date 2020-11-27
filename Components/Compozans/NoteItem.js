import React, { useState } from 'react';
import { View, TextInput, FlatList, ScrollView, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { suppNotes } from '../../Store/Actions/InGameActions';
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ item }) => {

    const dispatch = useDispatch();

    const styles = StyleSheet.create({
        ligne: {
            width: '90%',
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
            alignSelf: 'center',
        }
    });

    return (
        <>
        {
            item.show &&
                <View style={styles.ligne} >

                    <View style={{ width: '80%' }}>
                        <TextCustom text={item.note} size={2} />
                    </View>

                    <View style={{ width: '20%' }}>
                        <Gradiator
                            label={'X'}
                            fct={() => dispatch(suppNotes(item.id))}
                            styleObject={{ width: '100%', height: 20, alignSelf: 'flex-end' }}
                            fSize={2}
                        />
                    </View>
                </View>
        }
        </>
    )
}