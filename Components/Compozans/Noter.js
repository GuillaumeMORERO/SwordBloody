import React, { useState } from 'react';
import { View, TextInput, FlatList, ScrollView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { setNotes } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import NoteItem from './NoteItem';

export default ({fct}) => {
    
    const dispatch = useDispatch();
    const {inGameNotes} = useSelector((state) => state.InGameRedux);

    const [note, setNote] = useState(''); 
    
    const press = () => {
        dispatch(setNotes(note));
        fct();
    }
    
    return (
        <View style={{width:'95%', alignSelf:'center'}} >

            {inGameNotes.length > 0 &&
                <View style={{height: '70%', width:'100%'}}>
                    <FlatList
                        data={inGameNotes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return(<NoteItem item={item}/>)
                        }}
                    />
                </View>
            }

            <View>
                <TextInput
                    onChangeText={ e => setNote(e) }
                    placeholder={'Ecrivez votre note ici'}
                    placeholderTextColor={"#FFD66F" }
                    textAlign={'center'}
                    style={{color: '#FFD66F'}}
                />
            </View>
            <View>
                <Gradiator
                    label={'Valider'}
                    fct={() => press()}
                    styleObject={{width: '80%', alignSelf:'center'}}
                    fSize={2}
                />
            </View>
        </View>
    )
}