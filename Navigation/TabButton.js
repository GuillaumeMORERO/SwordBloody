import React, {useRef, useEffect, useState} from 'react';
import { View, ScrollView , StyleSheet, Image, FlatList, ActivityIndicator  , SafeAreaView  } from 'react-native';
import {  useDispatch, useSelector  } from 'react-redux';

import TextCustom from '../Components/TexteCustom'

export default ({name}) => {

    const {finalTeam} = useSelector((state) => state.InGameRedux);

    return (

        <View>
            <TextCustom text={name} size={18} />
        </View>
    )

}
