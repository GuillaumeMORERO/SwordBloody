import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tooltip } from 'react-native-elements';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ data, suppItem }) => {
    
    const styles = StyleSheet.create({
        card: {
            marginTop: 15,
            flexDirection: 'column',
        },
        label1: {
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
            id: {
                flex:1,
            },
            name: {
                flex:3,
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center',
            },
            gradiators: {
                flex:1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            },

    });

    return (
        <View style={styles.card}>

            <Tooltip
                popover={<TextCustom text={data.item.descr} size={2} italic />}
                backgroundColor={'#rgba(255, 214, 111, 0.0)'}
                containerStyle={{ padding: 10 }}
                height={150}
                width={300}
                overlayColor={'#rgba(0, 0, 0, 0.9)'}
                skipAndroidStatusBar={true}
            >

                <View style={styles.label1}>

                    <View style={styles.id}>
                        <TextCustom text={` - ${data.id} - `} size={14} italic bold />
                    </View>


                    <View style={styles.name}>
                        <TextCustom text={` "${data.item.name}" `} size={16} bold />
                        {data.item.use > 0 && <TextCustom text={` ( ${data.item.use} )`} size={12} italic />}
                    </View>

                    <View style={styles.gradiators}>
                        <Gradiator
                            label='<->'
                            fct={() => console.log('Echanger !!')}
                            styleObject={{ width: '40%', height: 30 }}
                            fSize={2}
                        />
                        <Gradiator
                            label='X'
                            fct={() => suppItem(data.item.name, data.item.id, data.item.type)}
                            styleObject={{ width: '40%', height: 30, }}
                            fSize={2}
                        />
                    </View>

                </View>

            </Tooltip>

        </View>

    )
}