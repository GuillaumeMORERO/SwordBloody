import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {

    const {finalTeam} = useSelector((state) => state.InGameRedux);
    const typeReçu = data.route.params.item.type;

    // console.log('finalTeam = ',finalTeam );
    // console.log('typeReçu = ',typeReçu );

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
    //console.log('perso => ', Perso.skill);

    const getProtec = () => {
        let protec = '';
        Perso.inventaire.forEach(item => {
            if (item.type === 'armure') {
                protec = item.use
            }
        })
        return protec
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

    const getImg = (type) => {
        switch(type) {
            case 'Chevalier': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Chevalier.png')}></Image>)
            case 'Prêtre': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Prêtre.png')}></Image>)
            case 'Magicien': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Magicien.png')}></Image>)
            case 'Voleur': return (<Image style={styles.avatar_image} source={require('../../Helpers/IMG/Voleur.png')}></Image>)
        }
    }

    const styles = StyleSheet.create({
        main : {
            flex: 4,
            flexDirection: 'row',
        },
        avatar : {
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar_image : {
            position: 'absolute',
            resizeMode: 'cover',
            width: '95%', 
            height: '95%',

            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 5,
            
        },
        main_right : {
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        name_container : {
            flex: 1,
            width: '90%',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
        },
            rowTxt : {
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
        carac_container : {
            flex: 4,
            width: '90%',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#FFD66F',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
        },
            carac_container_lateral : {
                width: '100%',
                height: '40%',
                justifyContent: 'space-around',
            },
        capacity_container : {
            flex: 1,
            width: '95%',
            justifyContent: 'space-evenly',
            marginBottom: 30
        },
        capacity_container_encapsul : {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        hrLine: {
            width: '30%',
            backgroundColor: '#FFD66F',
            height: 1,
            marginTop: 10,
        },
     
    });

    return (
        <View style={Styles.select_container}>
            <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/caracIcon.png')} />

            {isLoading && spinner()}

            {!isLoading && 
                <View>

                    <View style={styles.main}>

                        <View style={styles.avatar}>
                            {getImg(Perso.classe)}
                        </View>

                        <View style={styles.main_right}>
                            
                            <View style={styles.name_container}>
                                <View style={styles.rowTxt}>
                                    <TextCustom text='Classe : ' size= {13} />
                                    <TextCustom text={Perso.classe} size= {18}/>
                                </View>
                                <View style={styles.rowTxt}>
                                    <TextCustom text='Nom : ' size= {13} />
                                    <TextCustom text={Perso.name} size= {18} />
                                </View>
                                <View style={styles.rowTxt}>
                                    <TextCustom text='Niveau : ' size={13} />
                                    <TextCustom text={Perso.level} size={18} />
                                </View>
                            </View>

                            <View style={styles.carac_container}>

                                <View style={styles.carac_container_lateral}>

                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Force : ' size={13} />
                                        <TextCustom text={Perso.carac.force} size={18} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Pouvoir : ' size={13} />
                                        <TextCustom text={Perso.carac.pouvoir} size={18} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Habilté : ' size={13} />
                                        <TextCustom text={Perso.carac.habilete} size={18} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Endurance : ' size={13} />
                                        <TextCustom text={Perso.carac.endurance} size={18} />
                                    </View>

                                </View>

                                <View style={{...styles.hrLine, marginTop:0}} />

                                <View style={styles.carac_container_lateral}>

                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Experience : ' size={13} />
                                        <TextCustom text={Perso.xp} size={18} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Protection : ' size={13} />
                                        <TextCustom text={getProtec()} size={18} />
                                    </View>
                                    <View style={styles.rowTxt}>
                                        <TextCustom text='Dommage : ' size={13} />
                                        <TextCustom text={`${Perso.carac.degat}d+${Perso.carac.bonus}`} size={18} />
                                    </View>
                                
                                </View>

                            </View>

                        </View>

                    </View>
                
                    <View style={styles.capacity_container}>

                        <View style={styles.capacity_container_encapsul}>
                            <Gradiator
                                label='Inventaire et Capacités'
                                fct={() => data.navigation.navigate("ItemSkill", {type: typeReçu})}
                                styleObject={{ width: '40%' }}
                                fSize={15}
                            />
                            <Gradiator
                                label='Notes'
                                fct={() => console.log('oufissime')}
                                styleObject={{ width: '40%' }}
                                fSize={15}
                            />
                        </View>
                        {/* <View style={styles.capacity_container_encapsul}>
                            <Gradiator
                                label=' <- Retour'
                                fct={() => data.navigation.navigate("Feuilles de personnage")}
                                styleObject={{ width: '90%' }}
                                fSize={15}
                            />
                        </View>  */}

                    </View>

                </View>
            }

        </View>
    )
}