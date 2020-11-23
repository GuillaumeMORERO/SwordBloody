import React, {useRef, useEffect, useState} from 'react';
import { View, ScrollView , StyleSheet, Image, FlatList, ActivityIndicator  , SafeAreaView  } from 'react-native';
import { Tooltip, Text } from 'react-native-elements';
import {  useDispatch, useSelector  } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import ItemComponent from './ItemComponent';
import CapaComponent from './CapaComponent';
import AllPurposeAlert from '../AllPurposeAlert';
import Styles from '../Styles';

export default (data) => {
    console.log('data reçu dans itemSkill = ', data);
    const {finalTeam} = useSelector((state) => state.InGameRedux);

    const typeReçu = data.route.params.type;
    const [Perso, setPerso] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    //const [items, setItems] = useState();
    useEffect(() => {
        finalTeam.forEach(dataSet => {
            if (dataSet.classe === typeReçu) {
                setPerso(dataSet);
                setIsLoading(false);
            }
        })
    }, []);

    const capa = () => {
        var items = new Array();
        Perso.skills.forEach((item, key) => {
            //console.log('key = ', key,' item = ', item);
            items.push({id: key+1, name: item.name, descr: item.descr});
        });
        return items;
    }
     
    const itemList = () => {
        var items = new Array();
        // Object.values(Perso.inventaire).forEach((item, key) => {
        //     if (item === "") {item = "vide"}
        //     items.push({id: key+1, item: item});
        // });
        Perso.inventaire.forEach((item, key) => {
            items.push({id: key+1, item: item});
        });
        return items;
    }

    const spinner = () => {
        if(isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" color='#FFD66F' />
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        divider: {
            flexDirection: 'row',
            justifyContent:'space-around',
            alignItems: 'center',
            //margin: 10,
            marginTop: 20,
            marginBottom: 10,
        },
        hrLine: {
            width: '30%',
            backgroundColor: '#FFD66F',
            height: 1,
        },
    })

    return(
        <View style={Styles.select_container}>
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/caracIcon.png')} />

            {isLoading && spinner() }

            {!isLoading &&
                <ScrollView>

                    <View style={styles.divider}>
                        <View style={styles.hrLine} />
                        <TextCustom text={'Capacités'} size={20} bold />
                        <View style={styles.hrLine} />
                    </View>

                    <FlatList 
                        data={capa()}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => {
                            return(<CapaComponent data={item}/>)
                        }}
                    />
                    
                    <View style={styles.divider}>
                        <View style={styles.hrLine} />
                        <TextCustom text={'Inventaire'} size={20} bold />
                        <View style={styles.hrLine} />
                    </View>

                    <FlatList 
                        data={itemList()}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => {
                            return(<ItemComponent data={item}/>)
                        }}
                    />

                </ScrollView>
            }
            
        </View>
    )
}