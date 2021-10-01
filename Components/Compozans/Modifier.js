import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { useDispatch } from 'react-redux';
import { modifCarac } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import ModifierItem from './ModifierItem';
import {localize} from '../../Helpers/Lang'

export default ({ fct, perso, dataSup }) => {

    const { carac, actualCarac } = perso;
    const dispatch = useDispatch();
    const [arrayOfModif, setArrayOfModif] = useState([]);
    const lang = dataSup.lang;
    const localizer = localize[lang].characSheet;

    const list = () => {
        let caracList = [];
        Object.entries(carac).forEach(([caracName, value]) => {
            const nameToDisplay = localizer[caracName];
            const nameToLogic = caracName;
            let actualValue = 0;
            for (let [actualCaracName, value] of Object.entries(actualCarac)) {
                if (actualCaracName === caracName) { actualValue = value }
            }
            caracName !== 'level' ? caracList.push({ 'nameToLogic': nameToLogic, 'nameToDisplay': nameToDisplay, 'value': value, 'actualValue': actualValue }) : null;
        });
        caracList.push({ 'nameToLogic': 'protection', 'nameToDisplay': localizer.protection, 'value': perso.protection, 'actualValue': perso.protection })
        return caracList
    }

    const listGenerator = (carac) => {
        let list = []; let min = 0; let max = 0;
        if (carac !== 'endurance') { min = -10; max = 10; }
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
        dispatch(modifCarac(arrayOfModif, perso.id));
        fct();
    }

    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: '80%' }}>

                <FlatList
                    data={list()}
                    keyExtractor={(item) => item.nameToDisplay.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ModifierItem carac={item} listGenerator={listGenerator(item.nameToLogic)} send={send} />
                        )
                    }}
                />

            </View>

            <Gradiator
                label={localize[lang].global.validate}
                fct={() => press()}
                styleObject={{ height: 40, width: '40%', margin: 10 }}
                fSize={2}
                grCouleur={dataSup.color}
            />

        </View>
    )
}

