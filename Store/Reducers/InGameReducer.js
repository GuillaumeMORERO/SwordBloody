
import { VALIDATION_CHOICE, RESET_STATE, SET_PARAGRAPH, SET_BOOK, MANAGE_HERO, SET_NOTES, SUPP_NOTES, SUPP_OBJET } from '../Actions/InGameActions';

import { database } from '../../Helpers/Data';
import { baseEquip } from '../../Helpers/Logic';

const initialState = {
  team: [],
  book: '',
  set: false,
  paragraph: '',
  finalTeam: [],
  inGameNotes: [],
};

function inGameRedux(state = initialState, action) {
  let nextState
  let temporaryTeam = [];

  switch (action.type) {

    case MANAGE_HERO: {
      if (action.action === 'suppr') {
        return nextState = {
          ...state,
          team: state.team.filter(perso => perso.id != action.charac.id)
        }
      }
      if (action.action === 'accept') {
        return nextState = {
          ...state,
          team: [...state.team, action.charac]
        }
      }
    };

    case VALIDATION_CHOICE: {

      action.team.forEach(perso => {

        var temporaryPerso = { classe: "", name: "", level: "", xp: 0, protection: 0, arme: true, skills: [], carac: [], inventaire: [] };

        database.forEach(persoData => {
          if (persoData.classe === perso.type) {

            temporaryPerso.classe = perso.type;
            temporaryPerso.name = perso.name;
            temporaryPerso.level = action.level
            temporaryPerso.skills = persoData.skills;
            persoData.carac.forEach(dataByLvl => { if (dataByLvl.level === action.level) { temporaryPerso.carac = dataByLvl; } });
            temporaryPerso.inventaire = baseEquip(perso.type, action.level);
            let armure = temporaryPerso.inventaire.find(obj => obj.type === 'armure');
            temporaryPerso.protection = armure.use;
            temporaryTeam = [...temporaryTeam, temporaryPerso];
          }
        });
      });

      return nextState = {
        ...state,
        team: action.team,
        book: action.book,
        set: true,
        finalTeam: temporaryTeam,
      };

    };

    case RESET_STATE: {
      return nextState = {
        ...state,
        team: [],
        book: '',
        set: false,
        paragraph: '',
        finalTeam: [],
        inGameNotes: [],
      };
    };

    case SET_BOOK: {
      return nextState = {
        ...state,
        book: action.book,
      };
    };

    case SET_PARAGRAPH: {
      return nextState = {
        ...state,
        paragraph: action.num,
      };
    };

    case SET_NOTES: {
      return nextState = {
        ...state,
        inGameNotes: [...state.inGameNotes, { id: state.inGameNotes.length, note: action.notes, show: true }],
      };
    };

    case SUPP_NOTES: {
      let newNotes = [];
      state.inGameNotes.forEach(element => {
        if (element.id === action.id) { element.show = false }
        newNotes.push(element)
      });
      return nextState = {
        ...state,
        inGameNotes: newNotes
      }
    };

    case SUPP_OBJET: {
      let perso = state.finalTeam.find(elm => elm.classe === action.classe);
      let inventaire = perso.inventaire;
      let objectToSupp = inventaire.find(obj => obj.id === action.id);

      if (objectToSupp.type === 'arme') {
        perso.arme = false;
        if (perso.classe!='Chevalier') {perso.carac.force=perso.carac.force-2; perso.carac.bonus=perso.carac.bonus-2}
      };
      if (objectToSupp.type === 'armure') {perso.protection = 0};
      let newInventaire = inventaire.filter(objet => objet.id !== action.id);
      perso.inventaire = newInventaire;

      let teamSupp = state.finalTeam.filter(charac => charac.classe !== action.classe);
      let newTeam = [...teamSupp, perso]

      return nextState = {
        ...state,
        finalTeam: newTeam
      }
    };

    default: {
      return state
    };

  }
}

export default inGameRedux;