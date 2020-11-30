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

var Epée = {
    type: "arme", // select picker
    name: "Epée", // textinput
    descr: "Une epée de base", // textinput
    use: 0, // switch ?
    usable: false, // switch ?
    id: `arme_${random(1, 10000)}` // generé avec import de la fct depuis logic
};