import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default () => {

    const [dice, setDice] = useState(2);
    const [arrayOfDice, setArrayOfDice] = useState();
    const [displayed, setDisplayed] = useState(false);

    const generateArray = () => {
        let nbrs = []; let lance = 0;
        while (lance < dice) {
            lance++;
            nbrs.push({ 'id': lance, 'value': Math.floor((Math.random() * 6) + 1) });
        }
        return nbrs

    }

    const listGenerator = () => {
        let list = []; let min = 1; let max = 10;
        for (let i = 0; i < (max); i++) {
            list.push({ 'key': i, 'value': min++ });
        }
        return list
    }

    const launch = () => {
        setArrayOfDice(generateArray());
        setDisplayed(true);
    }

    const dieImg = item => {
        if (item.value === 1) { return <Image style={styles.die} source={require('../../Helpers/IMG/die1.png')} /> };
        if (item.value === 2) { return <Image style={styles.die} source={require('../../Helpers/IMG/die2.png')} /> };
        if (item.value === 3) { return <Image style={styles.die} source={require('../../Helpers/IMG/die3.png')} /> };
        if (item.value === 4) { return <Image style={styles.die} source={require('../../Helpers/IMG/die4.png')} /> };
        if (item.value === 5) { return <Image style={styles.die} source={require('../../Helpers/IMG/die5.png')} /> };
        if (item.value === 6) { return <Image style={styles.die} source={require('../../Helpers/IMG/die6.png')} /> };
    }

    const result = () => {
        let total = 0;
        arrayOfDice.forEach(element => {
            total = total + element.value;
        });
        return total
    }

    const styles = StyleSheet.create({
        vue: {
            width: '95%',
            height: '100%',
            alignSelf: 'center',
        },
        config: {
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        die_zone: {
            flex: 1,
            alignItems: 'center',
        },
        one_die: {
            marginVertical: 2,
            width: dice > 6 ? 30 : 50,
            justifyContent: 'center',
        },
        die: {
            resizeMode:'center',
            width: dice > 6 ? 30 : 50,
        },
        result: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.vue} >

            <View style={styles.config}>

                <TextCustom text={'Nombre de dé à lancer : '} size={2} />
                <Picker
                    selectedValue={dice}
                    style={{ width: 80, height: 20, color: '#FFD66F' }}
                    onValueChange={(itemValue, itemIndex) => setDice(itemValue)}
                >
                    {
                        listGenerator().map((nbr) => {
                            return (<Picker.Item key={nbr.key} label={nbr.value.toString()} value={nbr.value} />)
                        })
                    }
                </Picker>
                <Gradiator
                    label={'Lancer'}
                    fct={() => launch()}
                    styleObject={{ width: '20%', height: 30 }}
                    fSize={2}
                />

            </View>

            <View style={styles.die_zone}>
                {displayed &&
                    <FlatList
                        data={arrayOfDice}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.one_die}>
                                    {dieImg(item)}
                                </View>
                            )
                        }}
                    />
                }
            </View>

            <View style={styles.result}>
                {displayed &&
                    <TextCustom text={result()} size={40} bold />
                }

            </View>

        </View>
    )
}