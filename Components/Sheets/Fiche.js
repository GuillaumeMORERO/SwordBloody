import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';

export default (data) => {
    
    const dispatch = useDispatch();
    const inGameState = useSelector((state) => state.InGameRedux);

    console.log('inGameState du chevalier : ', inGameState);
    const charac = data.route.params.item;

    const styles = StyleSheet.create({
        text : {
            padding: 5,
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            fontFamily: 'Tangerine-Regular',
            fontSize: 25,
        },
        text_non_font: {
            textAlign: 'center',
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            fontSize: 13,
        },
        text_equipement : {
            //backgroundColor: '#rgba(255, 0, 0, 0.5)', // rouge
            paddingLeft: 2,
            paddingRight: 0,
            paddingTop: 5,
            paddingBottom: 5,
            fontFamily: 'Tangerine-Regular',
            fontSize: 20,
        },
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
            borderRadius: 10,

            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
        },
        main_right : {
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        name_container : {
            flex: 1,
            width: '90%',
            justifyContent: 'center',
        },
        name_class : {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        carac_container : {
            width: '90%',
            flex: 4,
            justifyContent: 'space-around',
        },
        carac_container_lateral : {
            width: '100%',
            height: '40%',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderColor: '#FFD66F',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,

            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3,
        },
        carac : {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        capacity_container : {
            flex: 1,
            width: '95%',
            justifyContent: 'space-evenly',
        },
        capacity_container_encapsul : {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        // equipment_container : {
        //     width: '90%',
        //     flex: 6,
        //     //backgroundColor: '#rgba(255, 0, 0, 0.5)', // rouge
        //     alignItems: 'center',
        // },
        // equipment_container_laterals : {
        //     width: '100%',
        //     height: '90%',
        //     //backgroundColor: '#rgba(0, 0, 255, 0.5)', // bleu
        //     flexDirection: 'row',
        // },
        // equipment_list: {
        //     width: '50%',
        //     justifyContent: 'space-evenly',
        //     alignItems: 'center',
        //     borderColor: '#FFD66F',
        //     borderRadius: 10,
        //     paddingBottom: 10,
        //     paddingTop: 10,

        //     shadowColor: "#000",
        //     shadowOffset: { width: 0, height: 2 },
        //     shadowOpacity: 0.5,
        //     shadowRadius: 2,
        //     elevation: 3
        // },
        // equipment_item: {
        //     //backgroundColor: '#rgba(0, 255, 0, 0.5)', // vert
        //     width: '90%',
        //     flexDirection: 'row',
        //     justifyContent: 'space-around',
        //     alignItems: 'center',
        // },
     
    });

    return (
        <View style={Styles.select_container}>
        <Image style={Styles.backgroundImage} source={require('../../Helpers/IMG/BACK_SHEET.png')}></Image>

            <View style={styles.main}>

                <View style={styles.avatar}>
                    <Image style={styles.avatar_image} source={require('../../Helpers/IMG/Chevalier.png')}></Image>
                </View>

                <View style={styles.main_right}>
                    
                    <View style={styles.name_container}>
                        <View style={styles.name_class}>
                            <TextCustom text='Classe : ' size= {13} />
                            <TextCustom text={charac.type} size= {18} />
                        </View>
                        <View style={styles.name_class}>
                            <TextCustom text='Nom : ' size= {13} />
                            <TextCustom text={charac.name} size= {18} />
                        </View>
                    </View>
                    
                    <View style={styles.carac_container}>

                        <View style={styles.carac_container_lateral}>

                            <View style={styles.carac}>
                                <TextCustom text='Force : ' size={13} />
                                <TextCustom text='10' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Pouvoir : ' size={13} />
                                <TextCustom text='10' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Habilté : ' size={13} />
                                <TextCustom text='10' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Endurance : ' size={13} />
                                <TextCustom text='10' size={18} />
                            </View>

                        </View>

                        <View style={styles.carac_container_lateral}>

                            <View style={styles.carac}>
                                <TextCustom text='Niveau : ' size={13} />
                                <TextCustom text='10' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Experience : ' size={13} />
                                <TextCustom text='10000' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Protection : ' size={13} />
                                <TextCustom text='3' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Dommage : ' size={13} />
                                <TextCustom text='2D+2' size={18} />
                            </View>
                            <View style={styles.carac}>
                                <TextCustom text='Arme : ' size={13} />
                                <TextCustom text='Epée' size={18} />
                            </View>
                        
                        </View>

                    </View>

                </View>

            </View>



            {/* <View style={styles.equipment_container}>
                <Text style={styles.text}>Equipement</Text>
                <View style={styles.equipment_container_laterals}>

                    <View style={styles.equipment_list}>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>1 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements gauche</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>2 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements gauche</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>3 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements gauche</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>4 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements gauche</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>5 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements gauche</Text>
                        </View>
                    </View>

                    <View style={styles.equipment_list}>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>6 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements droite</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>7 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements droite</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>8 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements droite</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>9 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements droite</Text>
                        </View>
                        <View style={styles.equipment_item}>
                            <Text style={styles.text_equipement}>10 :</Text>
                            <Text style={styles.text_equipement}>Liste de 5 equipements droite</Text>
                        </View>
                    </View>

                </View>
            </View> */}

            <View style={styles.capacity_container}>

                <View style={styles.capacity_container_encapsul}>
                    <Gradiator
                        label='capacités spé'
                        fct={() => console.log('oufissime')}
                        styleObject={{ width: '40%' }}
                        fSize={15}
                    />
                    <Gradiator
                        label='Inventaire'
                        fct={() => console.log('oufissime')}
                        styleObject={{ width: '40%' }}
                        fSize={15}
                    />
                </View>
                <View style={styles.capacity_container_encapsul}>
                    <Gradiator
                        label=' <- Retour'
                        fct={() => data.navigation.navigate("Feuilles de personnage")}
                        styleObject={{ width: '90%' }}
                        fSize={15}
                    />
                </View>

            </View>

        </View>
    )
}