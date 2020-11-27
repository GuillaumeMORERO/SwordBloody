import React from 'react';
import { View } from 'react-native';

import { useDispatch } from 'react-redux';
import { suppObjet } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct, book, classe }) => {

    console.log(fct, book, classe);
    const dispatch = useDispatch();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TextCustom text={'va falloir réfléchir...'} size={3} />
        </View>
    )
}