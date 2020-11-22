import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux';
import { setParagraph } from '../Store/Actions/InGameActions';

import TextCustom from './TexteCustom';
import Styles from './Styles';
import Gradiator from './Gradiator';

export default () => {

    const dispatch = useDispatch();
    const {paragraph} = useSelector((state) => state.InGameRedux);
    
    const [para, setPara] = useState(paragraph); 

    return (
        <View style={{width:'70%', alignSelf:'center'}} >
            <View>
                <Input
                    onChangeText={ e => setPara(e) }
                    value={paragraph}
                />
            </View>
            <View>
                <Gradiator
                    label={'Valider'}
                    fct={() => dispatch(setParagraph(para))}
                    styleObject={{width: '100%'}}
                    fSize={15}
                />
            </View>
        </View>
    
    
    )
}