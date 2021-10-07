import React from 'react';
import { View, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { suppObjet, addObject } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';

export default ({ fct, persoId, objectId, dataSup }) => {

    const idDuPersoQuiDonne = persoId;
    const { finalTeam } = useSelector((state) => state.InGameRedux);
    const dispatch = useDispatch();

    const listTeam = finalTeam.filter(perso => perso.id != idDuPersoQuiDonne);

    const press = (length, idReceivingCharac) => {
        if (length < 10) {
            let givingInventaire = finalTeam.find(perso => perso.id === idDuPersoQuiDonne).inventaire;
            let obj = givingInventaire.find(item => item.id === objectId);
            dispatch(addObject(obj, idReceivingCharac));

            dispatch(suppObjet(objectId, idDuPersoQuiDonne));

            fct();
        }
    }
console.log('exchanger : ', dataSup)
    const showMessage = (length) => {
        if (length >= 10) {
            return <TextCustom text={dataSup.localizerItems.heHasTooMuch} size={1} italic />
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
                                fct={() => press(item.inventaire.length, item.id)}
                                fSize={2}
                                fCouleur={item.inventaire.length < 10 ? '#FFD66F' : 'grey'}
                                grCouleur={item.inventaire.length < 10 ? dataSup.color : 'grey'}
                            />
                            {showMessage(item.inventaire.length)}
                        </View>
                    )
                }}
            />

        </View>
    )
}