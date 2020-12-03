import { combineReducers } from 'redux';

import InGameRedux from './Reducers/InGameReducer';
import SaveRedux from './Reducers/SaveReducer';

const rootReducer = combineReducers({
    InGameRedux: InGameRedux,
    SaveRedux: SaveRedux,
  });
  
  export default rootReducer;