import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight , Pressable } from 'react-native';

import TextCustom from './TexteCustom';
import Paragrapher from './Paragrapher';
import Gradiator from './Gradiator';

export default (title, message, closeAlert, composantToLaunch = null) => {
    
    const compozan = () => {
        if (composantToLaunch !== null) {
            switch(composantToLaunch) {
                case 'Paragrapher' : {return <Paragrapher />}
            }
        }
    }

    const styles = StyleSheet.create({
        alert_view: {
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        closer: {
            height:80,
            width:'80%',
        },
        zone: {
            width:'80%',
        },
    });

    return(
        <View style={styles.alert_view}>
            <View style={styles.closer} >
                <Gradiator
                        label={'Fermer'}
                        fct={() => closeAlert()}
                        styleObject={{width: 100, alignSelf:'flex-end'}}
                        fSize={15}
                    />
            </View>
            <View style={styles.zone}>
                <TextCustom text={` - ${title} - `} size={18} italic bold  />
                <TextCustom text={message} size={12} />
                {compozan()}
            </View>
        </View>
    )
}