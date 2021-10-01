
import { SET_LANG, SET_COLOR } from '../Actions/SettingsActions'

const initialState = {
  lang: 'fr',
  colorName: 'Red',
  color: '#rgba(255, 0, 0, 0.3)',
  colorFull: '#rgba(255, 0, 0, 1)'
};

function setRedux(state = initialState, action) {
  let nextState
  switch (action.type) {

    case SET_LANG: {
      return nextState = {
        ...state,
        lang: action.lang,
      }
    };

    case SET_COLOR: {
      return nextState = {
        ...state,
        colorName: action.colorName,
        color: action.color,
        colorFull: action.colorFull,
      }
    };

    default: {
      return state
    };

  }
}

export default setRedux;