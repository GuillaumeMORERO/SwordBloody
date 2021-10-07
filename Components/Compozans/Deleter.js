import React from 'react';
import { View } from 'react-native';

import { useDispatch } from 'react-redux';
import { suppObjet } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';

export default ({ fct, id, persoId, dataSup }) => {

    const dispatch = useDispatch();

    const press = () => {
        dispatch(suppObjet(id, persoId))
        fct();
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Gradiator
                label={dataSup.localizerItems.yes}
                fct={() => press()}
                styleObject={{ width: '50%', marginHorizontal: 10 }}
                fSize={2}
                grCouleur={dataSup.color}
            />
            <Gradiator
                label={dataSup.localizerItems.no}
                fct={() => fct()}
                styleObject={{ width: '50%', marginHorizontal: 10 }}
                fSize={2}
                grCouleur={dataSup.color}
            />
        </View>
    )
}