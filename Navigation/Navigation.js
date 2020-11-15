import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SelectionPresentation from '../Components/Selection/SelectionPresentation';
import BookSelection from '../Components/Selection/BookSelection';
import CharacSelection from '../Components/Selection/CharacSelection';
import ChoiceValidation from '../Components/Selection/ChoiceValidation';

import SheetSelection from '../Components/Sheets/SheetSelection';
import Fiche from '../Components/Sheets/Fiche';

export default () => {

    const AppStack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const SelectStackNavigator = () => {
        return (
            <AppStack.Navigator>
                <AppStack.Screen name="Selection de base" component={SelectionPresentation} />
                <AppStack.Screen name="Selection du Livre" component={BookSelection} />
                <AppStack.Screen name="Selection de Personnage" component={CharacSelection} />
                <AppStack.Screen name="Validation" component={ChoiceValidation} />
            </AppStack.Navigator>
        )
    };
    const OptionStackNavigator = () => {
        return (
            <AppStack.Navigator>
            </AppStack.Navigator>
        )
    };
    const SheetStackNavigator = () => {
        return (
            <AppStack.Navigator>
                <AppStack.Screen name="Feuilles de personnage" component={SheetSelection} />
                <AppStack.Screen name="fiche" component={Fiche} />
            </AppStack.Navigator>
        )
    };
    const CombatStackNavigator = () => {
        return (
            <AppStack.Navigator>
            </AppStack.Navigator>
        )
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Selection de base"
                tabBarOptions= {{
                    inactiveBackgroundColor: '#A0853F',
                    inactiveTintColor: '#FFD66F',
                    scrollEnabled: true,
                    style :{
                        backgroundColor: '#FFD66F',
                        height: 20,
                    },
                    labelStyle: {
                        color: 'black'

                    },
                }}
            >
                <Tab.Screen name="Selection" component={SelectStackNavigator} />
                <Tab.Screen name="Fiches" component={SheetStackNavigator} />

            </Tab.Navigator>
        </NavigationContainer>
    );

}