import { combineReducers } from 'redux';

import InGameRedux from './Reducers/InGameReducer';
import SelectorRedux from './Reducers/SelectorReducer';

const rootReducer = combineReducers({
    InGameRedux: InGameRedux,
    SelectorRedux: SelectorRedux,
  });
  
  export default rootReducer;