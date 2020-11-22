import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Tooltip } from 'react-native-elements';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({data}) => {

    //console.log('data = ', data);
    // Je reçoit data.id, puis data.item.name ou alors data.item.type, etc...
    
    const styles = StyleSheet.create({
        card : {
            marginTop: 15,
            flexDirection: 'column',
        },
        label1: {
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
        },        
        gradiators: {
            flexDirection: 'row',
            width:'20%',
            justifyContent: 'space-between',
        },
        underLine: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderBottomColor: '#FFD66F',
            borderBottomWidth: 0.5,
            margin: 10,
            width: '70%',
        },

    });

    return (
        <View style={styles.card}>

                <Tooltip 
                    popover={<TextCustom text={data.item.descr} size={14} couleur={'black'} /> } 
                    backgroundColor={'#FFD66F'} 
                    containerStyle={{padding: 10}}
                    height={150}
                    width={300}
                    overlayColor={'#rgba(0, 0, 0, 0.7)'}
                    skipAndroidStatusBar={true}
                >

                    <View style={styles.label1}>
                        
                        <View style={{width: '10%'}}>
                             <TextCustom text={` - ${data.id} - `} size={14} italic bold />
                        </View>
                       

                        <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                            <TextCustom text={` "${data.item.name}" `} size={16} bold />
                            {data.item.use > 0 && <TextCustom text={` ( ${data.item.use} )`} size={12} italic />}
                        </View>

                        <View style={styles.gradiators}>
                            <Gradiator
                                label='<->'
                                fct={() => console.log('Echanger !!')}
                                styleObject={{ width: '40%', height: 30}}
                                fSize={12}
                            /> 
                            <Gradiator
                                label='X'
                                fct={() => console.log('supprimer !!')}
                                styleObject={{ width: '40%', height: 30,}}
                                fSize={12}
                            /> 
                        </View>

                    </View>
          

                </Tooltip>

                <View style={styles.underLine}></View>

        </View>
        
    )
}