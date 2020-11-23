import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';

import { Provider } from 'react-redux';
import rootReducer from './Store/configureStore';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';

import Navigation from './Navigation/Navigation';
import { applyMiddleware, createStore } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: ['']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeToSend = createStore(persistedReducer, applyMiddleware());

const persistedStore = persistStore(storeToSend);

export default function App() {

  useEffect(() => {
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

  //const persistor = persistStore(Store);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <Provider store={storeToSend}>
      <PersistGate loading={null} persistor={persistedStore}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
}
