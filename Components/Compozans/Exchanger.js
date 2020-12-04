import React from 'react';
import { View, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { suppObjet, addObject } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct, classe, objectId }) => {

    const classeDuPersoQuiDonne = classe
    const { finalTeam } = useSelector((state) => state.InGameRedux);
    const dispatch = useDispatch();

    const listTeam = finalTeam.filter(perso => perso.classe != classeDuPersoQuiDonne);

    const press = (length, classeChoisi) => {
        if (length < 10) {
            let givingInventaire = finalTeam.find(perso => perso.classe === classeDuPersoQuiDonne).inventaire;
            let obj = givingInventaire.find(item => item.id === objectId);
            dispatch(addObject(obj, classeChoisi));

            dispatch(suppObjet(objectId, classeDuPersoQuiDonne));

            fct();
        }
    }

    const showMessage = (length) => {
        if (length >= 10) {
            return <TextCustom text={'Ce personnage a déjà dix objets dans son inventaire'} size={1} italic />
        }
    }

    return (
        <View style={{ height: '100%', width: '80%', alignSelf: 'center' }}>

            <FlatList
                contentContainerStyle={{ height: '90%', justifyContent: 'space-around' }}
                data={listTeam}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Gradiator
                                label={item.name}
                                fct={() => press(item.inventaire.length, item.classe)}
                                fSize={2}
                                fCouleur={item.inventaire.length < 10 ? '#FFD66F' : 'grey'}
                                grCouleur={item.inventaire.length < 10 ? '#rgba(255, 0, 0, 0.3)' : 'grey'}
                            />
                            {showMessage(item.inventaire.length)}
                        </View>
                    )
                }}
            />

        </View>
    )
}