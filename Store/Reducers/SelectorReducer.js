  
import { MANAGE_HERO, RESET, CHOOSEN_BOOK } from '../Actions/SelectActions'

const initialState = {
  team: [
    // {id: 1, type: 'Chevalier', name: 'Chevalier'},
    // {id: 2, type: 'Prêtre', name: 'Prêtre'},
    // {id: 3, type: 'Magicien', name: 'Magicien'},
    // {id: 4, type: 'Voleur', name: 'Voleur'} 
  ],
  choosenTeam: [

  ],
  book : '',
  
};

function selectorRedux(state = initialState, action) {
  let nextState
  switch (action.type) {
    case MANAGE_HERO: {
      
      if (action.act === 'suppr') {
        return nextState = {
          ...state,
          choosenTeam: state.choosenTeam.filter(perso => perso.id != action.charac.id)
        }
      }
      if (action.act === 'accept') {
        return nextState = {
          ...state,
          choosenTeam: [...state.choosenTeam, action.charac]
        }
      }
    };
    case RESET: {
      return nextState = {
        ...state,
        choosenTeam: [],
        book: ''
      }
    };
    case CHOOSEN_BOOK: {
      return nextState = {
        ...state,
        book: action.book
      }
    };
    default: {
      return state
    };
    
  }
}

export default selectorRedux;