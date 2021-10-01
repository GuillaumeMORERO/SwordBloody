import React from 'react';
import { View } from 'react-native';

import { useDispatch } from 'react-redux';
import { suppObjet } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';

export default ({ fct, id, persoId, dataSupp }) => {

    const dispatch = useDispatch();

    const press = () => {
        dispatch(suppObjet(id, persoId))
        fct();
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Gradiator
                label={'Oui'}
                fct={() => press()}
                styleObject={{ width: '50%', marginHorizontal: 10 }}
                fSize={2}
            />
            <Gradiator
                label={'Non'}
                fct={() => fct()}
                styleObject={{ width: '50%', marginHorizontal: 10 }}
                fSize={2}
            />
        </View>
    )
}