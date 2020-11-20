import React from 'react';
import { View, StyleSheet } from 'react-native';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({data}) => {
    
    const styles = StyleSheet.create({
        card : {
            marginTop: 15,
            flexDirection: 'column',
            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 10,            
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3,
        },
        labels: {
            padding: 10
        },
        label1: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        underLine: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            margin: 10,
            width: '70%',
            backgroundColor: 'red',
        },
        gradiators: {
            flexDirection: 'row-reverse'
        },
    });

    return (
        <View style={styles.card}>

            <View style={styles.labels}>

                <View style={styles.label1}>

                    <TextCustom text={`Emplacement n°${data.id} : `} size={11} italic bold />

                    <View style={styles.gradiators}>
                        <Gradiator
                            label='X'
                            fct={() => console.log('supprimer !!')}
                            styleObject={{ width: '20%', height: 30, marginRight: 5  }}
                            fSize={12}
                        /> 
                        <Gradiator
                            label='<->'
                            fct={() => console.log('Echanger !!')}
                            styleObject={{ width: '20%', height: 30, marginRight: 5 }}
                            fSize={12}
                        /> 
                    </View>

                </View>

                <View style={styles.underLine}/>
                
                <TextCustom text={` "${data.item}" `} size={15} />

            </View>

        </View>
    )
}