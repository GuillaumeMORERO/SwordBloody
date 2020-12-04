
import { MANAGE_STATE, SUPP_STATE } from '../Actions/SaveActions'

const initialState = {
  slot1: {},
  slot2: {},
  slot3: {}
};

function saveRedux(state = initialState, action) {
  let nextState
  switch (action.type) {
    case MANAGE_STATE: {

      let save1 = state.slot1; let save2 = state.slot2; let save3 = state.slot3;

      if (action.action === 'save') {
        action.slot === 1 ? save1 = action.stateToSave :
          action.slot === 2 ? save2 = action.stateToSave :
            action.slot === 3 ? save3 = action.stateToSave : null;
      }
      if (action.action === 'supp') {
        action.slot === 1 ? save1 = {} :
          action.slot === 2 ? save2 = {} :
            action.slot === 3 ? save3 = {} : null;
      }


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