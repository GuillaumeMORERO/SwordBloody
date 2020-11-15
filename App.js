import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import rootReducer from './Store/configureStore';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {createLogger} from 'redux-logger';
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

const storeToSend = createStore(persistedReducer, applyMiddleware(createLogger()));

const persistedStore = persistStore(storeToSend);

export default function App() {

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
