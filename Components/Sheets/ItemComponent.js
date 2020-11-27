import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Tooltip } from 'react-native-elements';

import { useDispatch } from 'react-redux';
import { suppObjet } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ data, persoClasse, suppItem }) => {



    const dispatch = useDispatch();
    
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
        gradiators: {
            flexDirection: 'row',
            width: '20%',
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

                    <View style={{ width: '10%' }}>
                        <TextCustom text={` - ${data.id} - `} size={14} italic bold />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TextCustom text={` "${data.item.name}" `} size={16} bold />
                        {data.item.use > 0 && <TextCustom text={` ( ${data.item.use} )`} size={12} italic />}
                    </View>

                    <View style={styles.gradiators}>
                        <Gradiator
                            label='<->'
                            fct={() => console.log('Echanger !!')}
                            styleObject={{ width: '40%', height: 30 }}
                            fSize={12}
                        />
                        <Gradiator
                            label='X'
                            fct={() => suppItem(data.item.name, data.item.id, persoClasse)}
                            styleObject={{ width: '40%', height: 30, }}
                            fSize={12}
                        />
                    </View>

                </View>

            </Tooltip>

        </View>

    )
}