import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default ({ data, suppItem, modifQte, teamLength, exchangeItem }) => {

    const [useNbr, setUseNbr] = useState(0);

    const listGenerator = () => {
        let list = []; let min = -15; let max = 15;
        for (let i = 0; i < (max * 2) + 1; i++) {
            list.push({ 'key': i, 'value': min++ });
        }
        return list
    }

    const press = (value) => {
        setUseNbr(value);
        modifQte(value, data.item.id);
        setUseNbr(0);
    }

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
            flex: 1,
        },
        name: {
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        gradiators: {
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        icon: {
            resizeMode: 'contain',
            width: 25,
            height: 25,
            alignSelf: 'center',
        }

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

                        <TouchableHighlight
                            style={{ width: '50%', opacity: teamLength > 1 ? 1 : 0.5}}
                            onPress={() => exchangeItem(data.item)}
                        >
                            <Image source={require('../../Helpers/IMG/echange.png')} style={styles.icon} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{ width: '50%' }}
                            onPress={() => suppItem(data.item.name, data.item.id, data.item.type)}
                        >
                            <Image source={require('../../Helpers/IMG/supp.png')} style={styles.icon} />
                        </TouchableHighlight>

                    </View>

                </View>

            </Tooltip>

            {data.item.usable &&
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>
                    <Picker
                        selectedValue={useNbr}
                        style={{ width: 80, height: 20, color: '#FFD66F' }}
                        onValueChange={(itemValue, itemIndex) => press(itemValue)}
                    >
                        {
                            listGenerator().map((nbr) => {
                                return (<Picker.Item key={nbr.key} label={nbr.value.toString()} value={nbr.value} />)
                            })
                        }
                    </Picker>
                    <View style={Styles.hrLine} />
                </View>
            }

        </View>

    )
}