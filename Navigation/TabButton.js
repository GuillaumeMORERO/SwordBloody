import React, {useRef, useEffect, useState} from 'react';
import { View, ScrollView , StyleSheet, Image, FlatList, ActivityIndicator  , SafeAreaView  } from 'react-native';
import {  useDispatch, useSelector  } from 'react-redux';

import TextCustom from '../Components/TexteCustom'

export default ({name}) => {

    const {finalTeam} = useSelector((state) => state.InGameRedux);

    const getIcon = (route) => {
        if (name === 'Selection') {return <Image style={{resizeMode: 'contain', width: 50}} source={require('../Helpers/IMG/homeIcon.png')} />}
        if (name === 'Fiches') {return <Image style={{resizeMode: 'contain', width: 50}} source={require('../Helpers/IMG/caracIcon.png')} />}
       
    }

    return (
        <View>
            {getIcon()}
        </View>
      
    )

}
  {/* <View>
            <Image style={styles.icon} source={require('../Helpers/IMG/homeIcon.png')} />
            <TextCustom text={name} size={18} />
        </View> */}
        {/* <Image style={{resizeMode: 'contain'}} source={require('../Helpers/IMG/homeIcon.png')} /> */}