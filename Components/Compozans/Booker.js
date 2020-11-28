import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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
    const [bonusXp, setBonusXp] = useState('');

    const press = () => {
        dispatch(replaceBook(nextBook, parseInt(bonusXp) ));
        fct();
    };

    const label = () => {
        let label = '';
        idCurrentBook === books.length ? label = 'Vous êtes au dernier livre !' : label = '- Le changement de livre est définitif ! - \n Livre Suivant : ';
        return label
    };

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
                        <TextInput
                            onChangeText={e => setBonusXp(e)}
                            placeholder={'Entrez ici une modification eventuelle'}
                            keyboardType={'numeric'}
                            placeholderTextColor={"#FFD66F"}
                            textAlign={'center'}
                            style={{ color: '#FFD66F' }}
                        />
                    </View>
                </View>
            }

        </View>
    )
}
