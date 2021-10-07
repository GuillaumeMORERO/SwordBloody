import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight , Pressable } from 'react-native';

import TextCustom from './TexteCustom';
import Paragrapher from './Compozans/Paragrapher';
import Gradiator from './Gradiator';
import Reseter from './Compozans/Reseter';
import Noter from './Compozans/Noter';
import Deleter from './Compozans/Deleter';
import Adder from './Compozans/Adder';
import Booker from './Compozans/Booker';
import Modifier from './Compozans/Modifier';
import Exchanger from './Compozans/Exchanger';
import Saver from './Compozans/Saver';
import Loader from './Compozans/Loader';
import Dicer from './Compozans/Dicer';
import Xper from './Compozans/Xper';
import Tooltiper from './Compozans/Tooltiper';

export default ({title, message, closeAlert, fct = null, id=null, persoId=null, book=null, perso=null, slot=null, dataSup=null}) => {
    
    const closeLabel = dataSup.closeLabel;
    const color = dataSup.color;

    const compozan = () => {
        if ((fct !== null) || (fct !== '')) {
            switch(fct) { 
                case 'Reseter' : {return <Reseter fct={closeAlert}  dataSup={dataSup}/>};
                case 'Tooltiper' : {return <Tooltiper fct={closeAlert}  dataSup={dataSup}/>};
                case 'Paragrapher' : {return <Paragrapher fct={closeAlert} dataSup={dataSup}/>};
                case 'Noter' : {return <Noter fct={closeAlert}  dataSup={dataSup}/>};
                case 'Booker' : {return <Booker fct={closeAlert} book={book} dataSup={dataSup}/>};
                case 'Modifier' : {return <Modifier fct={closeAlert} perso={perso} dataSup={dataSup}/>};
                case 'Saver' : {return <Saver fct={closeAlert} dataSup={dataSup}/>};
                case 'Loader' : {return <Loader fct={closeAlert} slot={slot} dataSup={dataSup}/>};
                case 'Dicer' : {return <Dicer dataSup={dataSup}/>};
                case 'Xper' : {return <Xper perso={perso} dataSup={dataSup}/>};
                
                // inventory objects
                case 'Deleter' : {return <Deleter fct={closeAlert} id={id} persoId={persoId} dataSup={dataSup}/>};
                case 'Adder' : {return <Adder fct={closeAlert} persoId={persoId} book={book} dataSup={dataSup}/>};
                case 'Exchanger' : {return <Exchanger fct={closeAlert} persoId={persoId} objectId={id} dataSup={dataSup}/>};
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
                        label={closeLabel}
                        fct={() => closeAlert()}
                        styleObject={{width: 100, alignSelf:'center'}}
                        fSize={2}
                        grCouleur={color}
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