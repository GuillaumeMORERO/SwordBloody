import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tooltip } from 'react-native-elements';

import TextCustom from '../TexteCustom';

export default ({data}) => {


    return (
        <View>
            <Tooltip 
                popover={<TextCustom text={data.descr} size={2} italic /> } 
                backgroundColor={'#rgba(255, 214, 111, 0.0)'} 
                containerStyle={{padding: 10}}
                height={150}
                width={300}
                overlayColor={'#rgba(0, 0, 0, 0.9)'}
                skipAndroidStatusBar={true}
            >
                <View style={{justifyContent:'center', alignItems:'center', margin: 5}}>
                    <View style={{width:'60%',flexDirection:'row', alignItems: 'center'}}>
                       
                        <View style={{alignItems:'flex-start'}}>
                            <TextCustom text={`- ${data.id} - `} size={14} italic />
                        </View>
                        
                        <View style={{width:'90%', alignItems:'center'}}>
                            <TextCustom text={data.name} size={18} bold />
                        </View>
                        
                    </View>
                </View>

            </Tooltip>
        </View>
  
    )   

}