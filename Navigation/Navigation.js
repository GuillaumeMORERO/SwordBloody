import React from 'react';
import { View, FlatList, Text, TouchableHighlight, TextInput, Image, StyleSheet, Pressable  } from 'react-native';

import TabButton from './TabButton';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SelectionPresentation from '../Components/Selection/SelectionPresentation';
import BookSelection from '../Components/Selection/BookSelection';
import CharacSelection from '../Components/Selection/CharacSelection';
import ChoiceValidation from '../Components/Selection/ChoiceValidation';

import SheetSelection from '../Components/Sheets/SheetSelection';
import Fiche from '../Components/Sheets/Fiche';
import ItemSkill from '../Components/Sheets/ItemSkill';

export default () => {

    const AppStack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const SelectStackNavigator = () => {
        return (
            <AppStack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadowColor: 'rgba(255, 255, 255, 0.5)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                        color: '#FFD66F'
                    },
                    headerTintColor: '#FFD66F', headerStyle: { backgroundColor: 'black'}
                }}
            >
                <AppStack.Screen name="Selection de base" component={SelectionPresentation} options={{ title: '- Bloody Sword -'}}/>
                <AppStack.Screen name="Selection du Livre" component={BookSelection} options={{title: 'Selection du Livre' }}/>
                <AppStack.Screen name="Selection de Personnage" component={CharacSelection} options={{title: 'Selection de Personnage(s)'}}/>
                <AppStack.Screen name="Validation" component={ChoiceValidation} options={{title: 'Validation'}}/>
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
            <AppStack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadowColor: 'rgba(255, 255, 255, 0.5)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                        color: '#FFD66F',
                    },
                    headerTintColor: '#FFD66F', headerStyle: { backgroundColor: 'black'}
                }}
            >
                <AppStack.Screen name="Feuilles de personnage" component={SheetSelection}/>
                <AppStack.Screen name="fiche" component={Fiche} options={{ title: 'Fiche de personnage' }}/>
                <AppStack.Screen name="ItemSkill" component={ItemSkill} options={{ title: 'Capacités & Inventaire'}}/>
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
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused}) => {
                        let size = focused ? 50 : 40;
                        let opacity = focused ? 1 : 0.5;
                        if (route.name === 'Selection') return <TabButton name="Selection" size={size} opacity={opacity}/>;
                        if (route.name === 'Fiches') return <TabButton name="Fiches" size={size} opacity={opacity}/>;
                    },
                })}
                tabBarOptions={{
                    showLabel: false,
                    activeBackgroundColor: 'rgba(255, 214, 111, 0.1)',
                    scrollEnabled: true,
                    keyboardHidesTabBar: true,
                    style :{
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        height: 60,
                        borderTopWidth: 0,
                        //position: 'absolute' 
                    },
                }}
            >
                <Tab.Screen name="Selection" component={SelectStackNavigator} />
                <Tab.Screen name="Fiches" component={SheetStackNavigator} />

            </Tab.Navigator>
        </NavigationContainer>
    );

}

// tabBarOptions= {{
//     //inactiveBackgroundColor: '#A0853F',
//     activeBackgroundColor: '#FFD66F',
//     scrollEnabled: true,
//     keyboardHidesTabBar: true,
//     style :{
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         height: 30,
//         position: 'absolute' 
//     },
//     labelStyle: {
//         color: 'black',
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5
//     }, 
// }}