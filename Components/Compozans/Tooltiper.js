import React from 'react';
import { View } from 'react-native';

import TextCustom from '../TexteCustom';

export default ({fct, dataSup}) => {

    return (
        <View style={{width:'70%', alignSelf:'center'}} >
            <TextCustom text={dataSup.descr} size={3} />
        </View>
    )
}