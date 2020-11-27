import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight , Pressable } from 'react-native';

import TextCustom from './TexteCustom';
import Paragrapher from './Compozans/Paragrapher';
import Gradiator from './Gradiator';
import Reseter from './Compozans/Reseter';
import Noter from './Compozans/Noter';
import Deleter from './Compozans/Deleter';

export default ({title, message, closeAlert, fct = null, id=null, classe=null}) => {

    const compozan = () => {
        if ((fct !== null) || (fct !== '')) {
            switch(fct) { 
                case 'Paragrapher' : {return <Paragrapher fct={closeAlert} />};
                case 'Reseter' : {return <Reseter fct={closeAlert}  />};
                case 'Noter' : {return <Noter fct={closeAlert}  />};
                case 'Deleter' : {return <Deleter fct={closeAlert} id={id} classe={classe} />};
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
            flex:1,
            width:'90%',
            marginTop: 20,
            justifyContent:'center',
        },
        zone: {
            flex:5,
            width:'90%',
            marginBottom: 20,
        },
    });

    return(
        <View style={styles.alert_view}>
            <View style={styles.closer} >
                <Gradiator
                        label={'Fermer'}
                        fct={() => closeAlert()}
                        styleObject={{width: 100, alignSelf:'center'}}
                        fSize={2}
                    />
            </View>
            <View style={styles.zone}>

                <View style={{flex:1, justifyContent:'center'}}>
                    <TextCustom text={` - ${title} - `} size={3} italic bold  />
                    <TextCustom text={message} size={2} />
                </View>

                {fct !== '' &&
                    <View style={{flex:3, justifyContent:'center'}}>
                        {compozan()}
                    </View>
                }
                
            </View>
        </View>
    )
}