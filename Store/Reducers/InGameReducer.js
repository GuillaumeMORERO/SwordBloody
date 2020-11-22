  
import { VALIDATION_CHOICE, RESET_STATE, SET_PARAGRAPH, SET_BOOK } from '../Actions/InGameActions';

import {database} from '../../Helpers/Data';
import {baseEquip} from '../../Helpers/Logic';

const initialState = {
  team: [],
  book : '',
  paragraph : '',
  finalTeam: []
};

function inGameRedux(state = initialState, action) {
  let nextState
  let temporaryTeam = [];

  switch (action.type) {
    case VALIDATION_CHOICE: {

      action.team.forEach(perso => {

        var temporaryPerso = {classe:"", name:"", level: "", xp: 0, protection: 0, arme: true, skills: [], carac: [], inventaire:[]};

        database.forEach(persoData => {
          if (persoData.classe === perso.type) {
            console.log('perso = ', perso);
            temporaryPerso.classe = perso.type;
            temporaryPerso.name = perso.name;
            temporaryPerso.level = action.level
            temporaryPerso.skills = persoData.skills;
            //temporaryPerso.inventaire = persoData.inventaire;
            //temporaryPerso.bourse = action.level * 5;
            //if (persoData.carquois !== null) {temporaryPerso.carquois = persoData.carquois}
            console.log('persoData.carac = ', persoData.carac);
            persoData.carac.forEach(dataByLvl => {if (dataByLvl.level === action.level) {temporaryPerso.carac = dataByLvl;} });
            temporaryPerso.inventaire = baseEquip(perso.type, action.level);
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
        paragraph : '',
        finalTeam: []
      };
    };

    case SET_BOOK: {
      return nextState = {
        ...state,
        book : action.book,
      };
    };

    case SET_PARAGRAPH: {
      return nextState = {
        ...state,
        paragraph : action.num,
      };
    };

    default: {
      return state
    };
    
  }
}

export default inGameRedux;