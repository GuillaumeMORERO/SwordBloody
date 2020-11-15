import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import InGameRedux from './Reducers/InGameReducer';
import SelectorRedux from './Reducers/SelectorReducer';

const rootReducer = combineReducers({
    InGameRedux: InGameRedux,
    SelectorRedux: SelectorRedux,
  });
  
  // Exports
  export default rootReducer;

// var allReducers =  combineReducers({
//     InGameRedux,
//     SelectorRedux
// })

// export default createStore(allReducers)

///////////////////////////

// const persistConfig = {
//     key: 'root',
//     //storage
//     storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, [InGameRedux,SelectorRedux])

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

//export default createStore(persistCombineReducers(persistConfig, {InGameRedux, SelectorRedux} ));