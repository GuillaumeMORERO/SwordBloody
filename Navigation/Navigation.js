import React from 'react';
import { View, FlatList, Text, TouchableHighlight, TextInput, Image, StyleSheet } from 'react-native';

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
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                    },
                }}
            >
                <AppStack.Screen name="Selection de base" component={SelectionPresentation} options={{ title: '- Bloody Sword -',headerTransparent: true }}/>
                <AppStack.Screen name="Selection du Livre" component={BookSelection} options={{headerTransparent: true }}/>
                <AppStack.Screen name="Selection de Personnage" component={CharacSelection} options={{headerTransparent: true }}/>
                <AppStack.Screen name="Validation" component={ChoiceValidation} options={{headerTransparent: true }}/>
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
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                    },
                }}
            >
                <AppStack.Screen name="Feuilles de personnage" component={SheetSelection} options={{headerTransparent: true }}/>
                <AppStack.Screen name="fiche" component={Fiche} options={{ title: '',headerTransparent: true }}/>
                <AppStack.Screen name="ItemSkill" component={ItemSkill} options={{ title: '',headerTransparent: true }}/>
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
                    tabBarIcon: () => {
                        if (route.name === 'Selection') return <TabButton name="Selection"/>;
                        if (route.name === 'Fiches') return <TabButton name="Fiches"/>;
                    },
                })}
                tabBarOptions={{
                    showLabel: false,
                    activeBackgroundColor: '#FFD66F',
                    scrollEnabled: true,
                    keyboardHidesTabBar: true,
                    style :{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        height: 30,
                        position: 'absolute' 
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