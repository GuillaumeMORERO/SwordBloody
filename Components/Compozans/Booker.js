import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

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

    const press = () => {
        dispatch(replaceBook(nextBook));
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
            height: '80%',
            justifyContent: 'space-around',
            alignSelf: 'center',
        }
    })

    return (
        <View style={styles.container}>

            <TextCustom text={label()} size={3} />
            {idCurrentBook !== books.length &&
                <Gradiator
                    label={nextBook.title}
                    fct={() => press()}
                    styleObject={{ width: '100%' }}
                    fSize={2}
                />
            }

        </View>
    )
}
