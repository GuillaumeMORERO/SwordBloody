  
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
        const persoType = perso.type.toString();
        const persoName = perso.name
        const persoLvl = action.level;

        database.forEach(persoData => {
          if (persoData.classe === persoType) {
            persoData.data.forEach(dataByLvl => {
              if (dataByLvl.level === persoLvl) {
                console.log('dataByLvl => ', dataByLvl);
                dataByLvl.name = persoName;
                temporaryTeam = [...temporaryTeam, dataByLvl]
              }
            });
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