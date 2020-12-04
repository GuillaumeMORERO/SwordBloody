import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { useDispatch } from 'react-redux';
import { modifCarac } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import ModifierItem from './ModifierItem';

export default ({ fct, perso }) => {

    const { carac, actualCarac } = perso;
    const dispatch = useDispatch();
    const [arrayOfModif, setArrayOfModif] = useState([]);

    const list = () => {
        let caracList = [];
        Object.entries(carac).forEach(([caracName, value]) => {
            const nameCapitalized = caracName.charAt(0).toUpperCase() + caracName.slice(1);
            let actualValue = 0;
            for (let [actualCaracName, value] of Object.entries(actualCarac)) {
                if (actualCaracName === caracName) { actualValue = value }
            }
            caracName !== 'level' ? caracList.push({ 'name': nameCapitalized, 'value': value, 'actualValue': actualValue }) : null;
        });
        caracList.push({ 'name': 'Protection', 'value': perso.protection, 'actualValue': perso.protection })
        return caracList
    }

    const listGenerator = (carac) => {
        let list = []; let min = 0; let max = 0;
        if (carac !== 'Endurance') { min = -10; max = 10; }
        else { min = -50; max = 50; }
        for (let i = 0; i < (max * 2) + 1; i++) {
            list.push({ 'key': i, 'value': min++ });
        }
        return list
    }

    const send = (carac, value) => {
        let modifToAdd = { 'carac': carac.toLowerCase(), 'value': value };
        if (arrayOfModif.length === 0) { setArrayOfModif([modifToAdd]); }
        else {
            let modifToCheck = arrayOfModif.find(elm => elm.carac === carac);
            if ((modifToCheck !== undefined) && (modifToAdd.carac === modifToCheck.carac)) {
                arrayOfModif.splice(arrayOfModif.find(elm => elm.carac === carac), 1);
            }
            setArrayOfModif(arrayOfModif => [...arrayOfModif, modifToAdd]);
        }
    }

    const press = () => {
        dispatch(modifCarac(arrayOfModif, perso.classe));
        fct();
    }

    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: '80%' }}>

                <FlatList
                    data={list()}
                    keyExtractor={(item) => item.name.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ModifierItem carac={item} listGenerator={listGenerator(item.name)} send={send} />
                        )
                    }}
                />

            </View>

            <Gradiator
                label="Valider"
                fct={() => press()}
                styleObject={{ height: 40, width: '40%', margin: 10 }}
                fSize={2}
            />

        </View>
    )
}

