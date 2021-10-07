import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({dataSup}) => {

    const [resultingLaunch, SetResultingLaunch] = useState([]);
    const [arrayOfDice, setArrayOfDice] = useState();
    const [displayed, setDisplayed] = useState(false);

    const listGenerator = () => {
        let list = []; let min = 1; let max = 10;
        for (let i = 0; i < (max); i++) {
            list.push({ 'key': i, 'value': min++ });
        }
        return list
    }

    const launch = (value) => {
        let count = 0; let result = 0; let nbrs = [];
        while (count < value) {
            count++;
            let dieResult = Math.floor((Math.random() * 6) + 1);
            result = result + dieResult;
            nbrs.push({ 'id': count, 'value': dieResult });
        }
        setArrayOfDice(nbrs);
        SetResultingLaunch([value, result]);
        setDisplayed(true);
    }

    const dieImg = value => {
        if (value === 1) { return <Image style={styles.die} source={require('../../Helpers/IMG/die1.png')} /> };
        if (value === 2) { return <Image style={styles.die} source={require('../../Helpers/IMG/die2.png')} /> };
        if (value === 3) { return <Image style={styles.die} source={require('../../Helpers/IMG/die3.png')} /> };
        if (value === 4) { return <Image style={styles.die} source={require('../../Helpers/IMG/die4.png')} /> };
        if (value === 5) { return <Image style={styles.die} source={require('../../Helpers/IMG/die5.png')} /> };
        if (value === 6) { return <Image style={styles.die} source={require('../../Helpers/IMG/die6.png')} /> };
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
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        die_zone: {
            flex: 1,
            alignItems: 'center',
        },
        one_die: {
            marginVertical: 2,
            width:  30,
            justifyContent: 'center',
        },
        die: {
            resizeMode:'center',
            width: 30,
        },
        result: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        dice_btn: {
            marginTop: 15,
            // flex: 1,
            width: '100%',
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: "wrap",
        },
    });

    return (
        <View style={styles.vue} >

            <View style={styles.config}>

                <TextCustom text={dataSup.localizerAlert.diceNumber} size={2} />

                <View style={styles.dice_btn}>
                    {
                        listGenerator().map((nbr) => {
                            return (
                                <Gradiator
                                    key={nbr.key}
                                    label={nbr.value}
                                    fct={() => launch(nbr.value)}
                                    styleObject={{ width: '18%', height: 30, marginLeft: 2, marginRight: 2 }}
                                    fSize={2}
                                    grCouleur={dataSup.color}
                                />
                            )
                        })
                    }
                </View>

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
                                    {dieImg(item.value)}
                                </View>
                            )
                        }}
                    />
                }
            </View>

            <View style={styles.result}>
                {displayed &&
                    <TextCustom text={`${resultingLaunch[0]} ${dataSup.localizerAlert.diceLaunchResult} ${resultingLaunch[1]}`} size={3} bold />
                }

            </View>

        </View>
    )
}