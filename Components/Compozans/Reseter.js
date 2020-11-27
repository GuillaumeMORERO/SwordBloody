import React from 'react';
import { View } from 'react-native';

import { resetInGame } from '../../Store/Actions/InGameActions';
import { useDispatch, useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct }) => {

    const dispatch = useDispatch();

    const inGameState = useSelector((state) => state.InGameRedux);

    const press = () => {
        dispatch(resetInGame());
        fct();
    }

    return (
        <View>

            {inGameState.set &&
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Gradiator
                        label={'Oui'}
                        fct={() => press()}
                        styleObject={{ width: '50%', marginHorizontal: 10 }}
                        fSize={2}
                    />
                    <Gradiator
                        label={'Non'}
                        fct={() => fct()}
                        styleObject={{ width: '50%', marginHorizontal: 10}}
                        fSize={2}
                    />
                </View>
            }
            {!inGameState.set && <TextCustom text={'Selection remise à zero !'} size={3} />}

        </View>
    )
}