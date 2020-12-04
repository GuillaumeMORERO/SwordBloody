import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';
import { replaceBook } from '../../Store/Actions/InGameActions';

import { books } from '../../Helpers/Data'
import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct, book }) => {

    const currentBook = book;
    const idCurrentBook = books.find(book => book.title === currentBook).id;
    const nextBook = books.find(book => book.id === idCurrentBook + 1);

    const dispatch = useDispatch();
    const [bonusXp, setBonusXp] = useState(0);

    const press = () => {
        dispatch(replaceBook(nextBook, parseInt(bonusXp)));
        fct();
    };

    const label = () => {
        let label = '';
        idCurrentBook === books.length ? label = 'Vous êtes au dernier livre !' : label = '- Le changement de livre est définitif ! - \n Livre Suivant : ';
        return label
    };

    const listGenerator = () => {
        let list = []; let min = -350; let max = 250;
        for (let i = 0; i < 13; i++) {
            list.push({ 'key': i, 'value': min += 50 });
        }
        return list
    }

    const styles = StyleSheet.create({
        container: {
            width: '80%',
            height: '100%',
            justifyContent: 'space-around',
            alignSelf: 'center',
        }
    })

    return (
        <View style={styles.container}>

            <TextCustom text={label()} size={2} />
            {idCurrentBook !== books.length &&
                <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                    <Gradiator
                        label={nextBook.title}
                        fct={() => press()}
                        styleObject={{ width: '100%' }}
                        fSize={2}
                    />
                    <View>
                        <TextCustom text={'Si dans le texte vous avez eu une modification de gain d\'expérience :'} size={1} />

                        <View style={{ width: '50%', alignItems: 'center' }}>
                            <Picker
                                selectedValue={bonusXp}
                                style={{ width: 200, color: '#FFD66F'}}
                                onValueChange={(itemValue, itemIndex) => setBonusXp(itemValue)}
                            >
                                {
                                    listGenerator().map((nbr) => {
                                        return (<Picker.Item key={nbr.key} label={nbr.value.toString()} value={nbr.value} />)
                                    })
                                }
                            </Picker>
                        </View>

                    </View>
                </View>
            }

        </View>
    )
}
