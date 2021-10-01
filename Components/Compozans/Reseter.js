import React from 'react';
import { View } from 'react-native';

import { resetInGame } from '../../Store/Actions/InGameActions';
import { useDispatch, useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import {localize} from '../../Helpers/Lang'

export default ({ fct, dataSup }) => {

    const dispatch = useDispatch();

    const press = () => {
        dispatch(resetInGame());
        fct();
    }

    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Gradiator
                    label={localize[dataSup.lang].global.yes}
                    fct={() => press()}
                    styleObject={{ width: '50%', marginHorizontal: 10 }}
                    fSize={2}
                    grCouleur={dataSup.color}
                />
                <Gradiator
                    label={localize[dataSup.lang].global.no}
                    fct={() => fct()}
                    styleObject={{ width: '50%', marginHorizontal: 10}}
                    fSize={2}
                    grCouleur={dataSup.color}
                />
            </View>
        </View>
    )
}