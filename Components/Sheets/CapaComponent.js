import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tooltip } from 'react-native-elements';

import TextCustom from '../TexteCustom';

export default ({data}) => {

    const styles = StyleSheet.create({
        underLine: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderBottomColor: '#FFD66F',
            borderBottomWidth: 0.5,
            margin: 10,
            width: '70%',
            backgroundColor: 'red',
        },
    });

    return (
        <View>
            <Tooltip 
                popover={<TextCustom text={data.descr} size={14} couleur={'black'} /> } 
                backgroundColor={'#FFD66F'} 
                containerStyle={{padding: 10}}
                height={150}
                width={300}
                overlayColor={'#rgba(0, 0, 0, 0.7)'}
                skipAndroidStatusBar={true}
            >
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{width:'60%',flexDirection:'row', alignItems: 'center'}}>
                       
                        <View style={{alignItems:'flex-start'}}>
                            <TextCustom text={`- ${data.id} - `} size={14} italic />
                        </View>
                        
                        <View style={{width:'90%', alignItems:'center'}}>
                            <TextCustom text={data.name} size={18} bold />
                        </View>
                        
                    </View>
                </View>

                <View style={styles.underLine}/>

            </Tooltip>
        </View>
  
    )   

}