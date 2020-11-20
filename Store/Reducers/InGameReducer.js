  
import { VALIDATION_CHOICE, RESET_STATE } from '../Actions/InGameActions';

import {database} from '../../Helpers/Data'

const initialState = {
  team: [],
  book : '',
  finalTeam: []
};

function inGameRedux(state = initialState, action) {
  let nextState
  let temporaryTeam = [];

  switch (action.type) {
    case VALIDATION_CHOICE: {

      action.team.forEach(perso => {

        var temporaryPerso = {classe:"", name:"", inventaire:[], capacités: [], data: []};

        database.forEach(persoData => {
          if (persoData.classe === perso.type) {
            
            temporaryPerso.classe = perso.type;
            temporaryPerso.name = perso.name;
            temporaryPerso.inventaire = persoData.inventaire;
            temporaryPerso.bourse = action.level * 5;
            if (persoData.carquois !== null) {temporaryPerso.carquois = persoData.carquois}
            temporaryPerso.capacités = persoData.capacités;
            persoData.data.forEach(dataByLvl => {
              if (dataByLvl.level === action.level) {temporaryPerso.data = dataByLvl;}
            });
            temporaryTeam = [...temporaryTeam, temporaryPerso];
          }
        });
      });

      return nextState = {
        ...state,
        team: action.team,
        finalTeam: temporaryTeam,
        book: action.book,
      };

    };

    case RESET_STATE: {
      return nextState = {
        ...state,
        team: [],
        book : '',
        finalTeam: []
      };
    };

    default: {
      return state
    };
    
  }
}

export default inGameRedux;