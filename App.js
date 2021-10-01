import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';

import SplashScreen from 'react-native-splash-screen'

import Navigation from './Navigation/Navigation';

import { Provider } from 'react-redux';
import { store, persistor } from './Store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
    const backAction = () => {
      Alert.alert("Fermeture de l'application", "Voulez-vous partir des Terres de Legendes ?", [
        {
          text: "Non",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Oui", onPress: () => BackHandler.exitApp() }
      ]);

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
}
