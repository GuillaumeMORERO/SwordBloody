  
import { VALIDATION_CHOICE } from '../Actions/InGameActions';

import {baseCarac} from '../../Helpers/Data'

const initialState = {
  team: [],
  book : '',
  Chevalier: {
    'id': '',
    'type': '',
    'name': '',
    'level': '',
    'caracFirst': {
      'force': '',
      'pouvoir': '',
      'habilete': '',
      'endurance': '',
    },
    'caracSecond': {
      'xp': '',
      'protection': '',
      'arme': '',
      'dommage': 
      { 
        'base': '', 
        'bonus': '' 
      }
    },
    'equipement' : {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
    }
  }
};

function inGameRedux(state = initialState, action) {
  let nextState
  switch (action.type) {
    case VALIDATION_CHOICE: {

      //   action.team.forEach(perso => {
      //       //console.log(perso.name)
      //       return nextState = {
      //           ...state,
      //           perso: {
      //               'name': perso.name,
      //               'type': perso.type,
      //               'id': perso.id
      //           }
      //       }
      //   });

      // indice 0 : Chevalier, indice 1 : pretre, indice 2 : magos, indice 3 : voleur
      //console.log('baseCarac dans reducer : ',baseCarac.Chevalier);
      baseCarac.Chevalier.forEach(baseCarac => {
        console.log('baseCarac : ', baseCarac.level);
      });
      action.team.forEach(perso => {
        console.log('perso : ', perso);
      });
      
      return nextState = {
        ...state,
        team: action.team,
        book: action.book
      };

    };
    default: {
      return state
    };
    
  }
}

export default inGameRedux;