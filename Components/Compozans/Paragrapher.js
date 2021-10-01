import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { setParagraph } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';

export default ({fct, dataSup}) => {

    const dispatch = useDispatch();
    const {paragraph} = useSelector((state) => state.InGameRedux);
    
    const [para, setPara] = useState(paragraph); 

    const press = () => {
        dispatch(setParagraph(para));
        fct();
    }

    return (
        <View style={{width:'70%', alignSelf:'center'}} >
            <View>
                <TextInput
                    onChangeText={ e => setPara(e) }
                    value={para}
                    placeholder={'n° de paragraphe'}
                    placeholderTextColor={"#FFD66F" }
                    keyboardType={'numeric'}
                    autoFocus={true}
                    textAlign={'center'}
                    style={{color: '#FFD66F'}}
                />
            </View>
            <View>
                <Gradiator
                    label={'Valider'}
                    fct={() => press()}
                    styleObject={{width: '100%'}}
                    fSize={2}
                />
            </View>
        </View>
    
    
    )
}