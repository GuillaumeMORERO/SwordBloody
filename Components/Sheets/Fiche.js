import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {

    const { finalTeam } = useSelector((state) => state.InGameRedux);
    const typeReçu = data.route.params.item.type;

    useEffect(() => {
        finalTeam.forEach(dataSet => {
            if (dataSet.classe === typeReçu) {
                setPerso(dataSet);
                setIsLoading(false);
            }
        })
    }, []);
    const [Perso, setPerso] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    const spinner = () => {
        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" color='#FFD66F' />
                </View>
            )
        }
    }

    const getImg = (type) => {
        switch (type) {
            case 'Chevalier': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Chevalier.png')}></Image>)
            case 'Prêtre': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Prêtre.png')}></Image>)
            case 'Magicien': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Magicien.png')}></Image>)
            case 'Voleur': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Voleur.png')}></Image>)
        }
    }

    // const getCarac = (carac) => {
    //     if (carac === 'force') {
    //         let force = Perso.carac.force;
    //         if ((!Perso.arme) && (Perso.classe!='Chevalier')) {force-=2}
    //         return force
    //     }
    //     else if (carac === 'protec') {
    //         let protec = '';
    //         Perso.inventaire.forEach(item => {
    //             if (item.type === 'armure') {
    //                 protec = item.use
    //             }
    //         })
    //         return protec === '' ? 0 : protec
    //     }
    //     else if (carac === 'damage') {
    //         const bonus = Perso.carac.bonus === 0  ? '' : Perso.carac.bonus !== -1 ? ` +${Perso.carac.bonus}` : `${Perso.carac.bonus}`;
    //         if ((!Perso.arme) && (Perso.classe!='Chevalier')) {bonus-=2}
    //         return `${Perso.carac.degat}d${bonus} `;
    //     }
    // }

    // const getProtec = () => {
    //     let protec = '';
    //     Perso.inventaire.forEach(item => {
    //         if (item.type === 'armure') {
    //             protec = item.use
    //         }
    //     })
    //     return protec === '' ? 0 : protec
    // }

    const damage = () => {
        console.log('bonus = ',Perso.carac.bonus);
        const bonus = Perso.carac.bonus === 0  ? '' : Perso.carac.bonus > 0 ? ` +${Perso.carac.bonus}` : `${Perso.carac.bonus}`;
        return `${Perso.carac.degat}d${bonus} `;
    }

    const styles = StyleSheet.create({
        main: {
            flex: 5,
            flexDirection: 'row',
        },
        avatar: {
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar_image: {
            position: 'absolute',
            resizeMode: 'cover',
            width: '95%',
            height: '95%',

            borderWidth: 1,
            borderColor: '#rgba(255, 0, 0, 0.5)',
            borderRadius: 5,

        },
        main_right: {
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        name_container: {
            flex: 1,
            width: '90%',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#rgba(255, 0, 0, 0.5)',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
        },
        rowTxt: {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        carac_container: {
            flex: 4,
            width: '90%',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#rgba(255, 0, 0, 0.5)',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
        },
        carac_container_lateral: {
            width: '100%',
            height: '40%',
            justifyContent: 'space-around',
        },
        capacity_container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },

    });

    return (
        <View style={Styles.select_container}>

            <Pressable style={Styles.back_arrow_pressable} onPress={() => data.navigation.goBack()}>
                <TextCustom text={'<<'} size={30} />
            </Pressable>

            {isLoading && spinner()}

            {!isLoading &&
                <View style={{flex:1}}>

                    <View style={styles.main}>

                        <View style={styles.avatar}>
                            {getImg(Perso.classe)}
                        </View>

                        <View style={styles.main_right}>

                            <View style={styles.name_container}>
                                <View style={styles.rowTxt}>
                                    <TextCustom text='Classe : ' size={1} />
                                    <TextCustom text={Perso.classe} size={2} />
                                </View>
                                <View style={styles.rowTxt}>
                                    <TextCustom text='Nom : ' size={1} />
                                    <TextCustom text={Perso.name} size={2} />
                                </View>
                                <View style={styles.rowTxt}>
                                    <TextCustom text='Niveau : ' size={1} />
                                    <TextCustom text={Perso.level} size={3} />
                                </View>
                            </View>

                            <View style={styles.carac_container}>

                                <View style={styles.carac_container_lateral}>

                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Force : ' size={1} />
                                        <TextCustom text={Perso.carac.force} size={3} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Pouvoir : ' size={1} />
                                        <TextCustom text={Perso.carac.pouvoir} size={3} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Habilté : ' size={1} />
                                        <TextCustom text={Perso.carac.habilete} size={3} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Endurance : ' size={1} />
                                        <TextCustom text={Perso.carac.endurance} size={3} />
                                    </View>

                                </View>

                                <View style={Styles.hrLine} />

                                <View style={styles.carac_container_lateral}>

                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Experience : ' size={1} />
                                        <TextCustom text={Perso.xp} size={3} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Protection : ' size={1} />
                                        <TextCustom text={Perso.protection} size={3} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Dommage : ' size={1} />
                                        <TextCustom text={damage()} size={3} />
                                    </View>

                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={styles.capacity_container}>

                        <Gradiator
                            label='Capacités'
                            fct={() => data.navigation.navigate("Skills", { type: typeReçu })}
                            styleObject={{ width: '40%' }}
                            fSize={2}
                        />
                        <Gradiator
                            label='Inventaire'
                            fct={() => data.navigation.navigate("Items", { type: typeReçu })}
                            styleObject={{ width: '40%' }}
                            fSize={2}
                        />

                    </View>

                </View>
            }

        </View>
    )
}