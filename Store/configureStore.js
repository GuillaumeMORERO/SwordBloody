import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

import InGameRedux from './Reducers/InGameReducer';
import SaveRedux from './Reducers/SaveReducer';
import SetterRedux from './Reducers/SettingsReducer';

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
};

const rootReducer = combineReducers({
	InGameRedux: InGameRedux,
	SaveRedux: SaveRedux,
  SetterRedux: SetterRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);