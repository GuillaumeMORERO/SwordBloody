import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default (data) => {
    const item = data.data;
    const navigation = data.navigation;
    const type = item.type;
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Gradiator
                label={item.name}
                fct={() => navigation.navigate("fiche", {item})}
                styleObject={{width: '70%', margin: 5}}
                fSize={15}
            />
            <Gradiator
                label={'-> skill'}
                fct={() => navigation.navigate("ItemSkill", {type})}
                styleObject={{width: '20%', height: 20, margin: 5}}
                fSize={15}
            />
        </View>
    )
}