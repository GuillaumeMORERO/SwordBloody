
import { 
  VALIDATION_CHOICE, 
  RESET_STATE, 
  SET_PARAGRAPH, 
  SET_BOOK, 
  MANAGE_HERO, 
  SET_NOTES, 
  SUPP_NOTES, 
  SUPP_OBJET, 
  REPLACE_BOOK,
  MODIF_CARAC
} from '../Actions/InGameActions';

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

        var temporaryPerso = { classe: "", name: "", level: "", xp: 0, protection: 0, arme: true, skills: [], carac: [], actualCarac: [], inventaire: [] };

        database.forEach(persoData => {
          if (persoData.classe === perso.type) {

            temporaryPerso.classe = perso.type;
            temporaryPerso.name = perso.name;
            temporaryPerso.level = action.level
            temporaryPerso.skills = persoData.skills;
            persoData.carac.forEach(dataByLvl => { 
              if (dataByLvl.level === action.level) { 
                temporaryPerso.carac = dataByLvl; 
                temporaryPerso.actualCarac = {force: dataByLvl.force, pouvoir: dataByLvl.pouvoir, habilete: dataByLvl.habilete, endurance: dataByLvl.endurance, dommage: dataByLvl.dommage, bonus: dataByLvl.bonus};
              } 
            });
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

    case REPLACE_BOOK: {
      let newteam = [];
      state.finalTeam.map(perso => {
        let newPerso = perso;
        perso.xp = Math.floor((1000 / state.finalTeam.length)+ action.modif) ;
        newteam.push(...newteam, newPerso);
      });

      return nextState = {
        ...state,
        finalTeam: newteam,
        book: action.book.title
      }
    };

    case MODIF_CARAC: {

      let perso = state.finalTeam.find(perso => perso.classe === action.classe);
      let {actualCarac} = perso;
      let arrayOfModif = action.modif;
 
      for (let [name, value] of Object.entries(actualCarac)) {
        arrayOfModif.forEach(modif => {
          if (name === modif.carac) {
            value = parseInt(value) + parseInt(modif.value);
            actualCarac[name] = value;
          }
        });
      }

      let newTeam = state.finalTeam.filter(hero => hero.classe !== action.classe);
      newTeam.push(perso);

      return nextState = {
        ...state,
        finalTeam: newTeam,
      }
    };


    default: {
      return state
    };

  }
}

export default inGameRedux;