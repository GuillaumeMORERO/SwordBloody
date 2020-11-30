import React from 'react';

import TabButton from './TabButton';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SelectionPresentation from '../Components/Selection/SelectionPresentation';
import BookSelection from '../Components/Selection/BookSelection';
import CharacSelection from '../Components/Selection/CharacSelection';

import SheetSelection from '../Components/Sheets/SheetSelection';
import Fiche from '../Components/Sheets/Fiche';
import Skills from '../Components/Sheets/Skills';
import Items from '../Components/Sheets/Items';

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
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 10,
                        color: '#FFD66F'
                    },
                    headerTintColor: '#FFD66F', headerStyle: { backgroundColor: 'black' }
                }}
            >
                <AppStack.Screen name="Selection de base" component={SelectionPresentation} options={{ title: '', headerShown: false}} />
                <AppStack.Screen name="Selection du Livre" component={BookSelection} options={{ title: '', headerShown: false }} />
                <AppStack.Screen name="Selection de Personnage" component={CharacSelection} options={{ title: '', headerShown: false }} />
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
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 10,
                        color: '#FFD66F',
                    },
                    headerTintColor: '#FFD66F', headerStyle: { backgroundColor: 'black' },
                }}
            >
                <AppStack.Screen name="Feuilles de personnage" component={SheetSelection}  options={{headerShown: false }}/>
                <AppStack.Screen name="fiche" component={Fiche} options={{ title: '', headerShown: false }} />
                <AppStack.Screen name="Skills" component={Skills} options={{ title: '', headerShown: false }} />
                <AppStack.Screen name="Items" component={Items} options={{ title: '', headerShown: false }} />
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
                tabBar={props => <TabButton {...props} />}
                initialRouteName="Selection de base"

                tabBarOptions={{
                    showLabel: false,
                    scrollEnabled: true,
                    keyboardHidesTabBar: true,
                }}
            >
                <Tab.Screen name="Selection" component={SelectStackNavigator} />
                <Tab.Screen name="Fiches" component={SheetStackNavigator} />

            </Tab.Navigator>
        </NavigationContainer>
    );

}
