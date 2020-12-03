
import { SAVE_STATE } from '../Actions/SaveActions'

const initialState = {
  slot1: {},
  slot2: {},
  slot3: {}
};

function saveRedux(state = initialState, action) {
  let nextState
  switch (action.type) {
    case SAVE_STATE: {

      let save1 = state.slot1; let save2 = state.slot2; let save3 = state.slot3;
      action.slot === 1 ? save1 = action.stateToSave : 
      action.slot === 2 ? save2 = action.stateToSave : 
      action.slot === 3 ? save1 = action.stateToSave : null;
      console.log(Object.keys(save3))

      return nextState = {
        ...state,
        slot1: save1,
        slot2: save2,
        slot3: save3
      }

    };

    default: {
      return state
    };

  }
}

export default saveRedux;