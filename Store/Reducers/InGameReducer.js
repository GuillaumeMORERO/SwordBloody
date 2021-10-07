
import {
  VALIDATION_CHOICE,
  RESET_STATE,
  SET_PARAGRAPH,
  SET_BOOK,
  MANAGE_HERO,
  SET_NOTES,
  SUPP_NOTES,
  SUPP_OBJET,
  ADD_OBJET,
  REPLACE_BOOK,
  MODIF_CARAC,
  QTE_USE_OBJECT,
  LOAD_DATA,
  GAIN_XP
} from '../Actions/InGameActions';

import { database, ranks } from '../../Helpers/Data';
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

        var temporaryPerso = {id: "", classe: "", name: "", level: "", xp: 0, protection: 0, arme: true, skills: [], carac: [], actualCarac: [], inventaire: [] };

        database.forEach(persoData => {
          if (persoData.id === perso.id) {

            temporaryPerso.classe = perso.type;
            temporaryPerso.name = perso.name;
            temporaryPerso.level = action.level;
            temporaryPerso.oldLevel = action.level;

            let startingXp = ranks.find(rank => rank.level === action.level);
            temporaryPerso.xp = startingXp.points;

            temporaryPerso.skills = persoData.skills;
            persoData.carac.forEach(dataByLvl => {
              if (dataByLvl.level === action.level) {
                temporaryPerso.carac = dataByLvl;
                temporaryPerso.actualCarac = { force: dataByLvl.force, pouvoir: dataByLvl.pouvoir, habilete: dataByLvl.habilete, endurance: dataByLvl.endurance, dommage: dataByLvl.dommage, bonus: dataByLvl.bonus };
              }
            });
            temporaryPerso.inventaire = baseEquip(perso.id, action.level);
            let armure = temporaryPerso.inventaire.find(obj => obj.type === 'armure');
            temporaryPerso.protection = armure.use;
            temporaryPerso.id = perso.id;

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
      let perso = state.finalTeam.find(elm => elm.id === action.persoId);
      let inventaire = perso.inventaire;

      let newInventaire = inventaire.filter(objet => objet.id !== action.id);
      //Array.isArray(newInventaire) ? perso.inventaire = newInventaire : newInventaire = [];
      perso.inventaire = newInventaire

      let teamSupp = state.finalTeam.filter(charac => charac.id !== action.persoId);
      let newTeam = [...teamSupp, perso]

      return nextState = {
        ...state,
        finalTeam: newTeam
      }
    };

    case ADD_OBJET: {
      //console.log('action = ', action.objet)
      let perso = state.finalTeam.find(elm => elm.id === action.persoId);
      let { inventaire } = perso;
      //let inventaire = perso.inventaire;
      //console.log(inventaire)
      let newInventaire = inventaire.push(action.objet);
      //console.log('newInventaire = ',newInventaire)
      // perso.inventaire = newInventaire;
      // console.log(perso.inventaire)
      let teamSupp = state.finalTeam.filter(charac => charac.id !== action.persoId);
      let newTeam = [...teamSupp, perso]

      return nextState = {
        ...state,
        finalTeam: newTeam
      }

    }

    case REPLACE_BOOK: {
      return nextState = {
        ...state,
        book: action.bookId
      }
    };

    case MODIF_CARAC: {

      let perso = state.finalTeam.find(perso => perso.id === action.persoId);
      let { actualCarac } = perso;
      let arrayOfModif = action.modif;

      arrayOfModif.forEach(objectOfModif => {
        if (objectOfModif.carac === 'protection') {
          perso.protection = parseInt(perso.protection) + parseInt(objectOfModif.value);
        }
        else {
          actualCarac[objectOfModif.carac] = parseInt(actualCarac[objectOfModif.carac]) + parseInt(objectOfModif.value);
        }
      });

      let newTeam = state.finalTeam.filter(hero => hero.id !== action.persoId);
      newTeam.push(perso);

      return nextState = {
        ...state,
        finalTeam: newTeam,
      }
    };

    case QTE_USE_OBJECT: {

      let perso = state.finalTeam.find(perso => perso.id === action.persoId);
      let { inventaire } = perso;

      let objectToModif = inventaire.find(object => object.id === action.idItem);
      objectToModif.use += action.value;

      let newInventaire = inventaire.filter(object => object.id !== action.idItem);
      newInventaire.push(objectToModif);
      perso.inventaire = newInventaire

      let newTeam = state.finalTeam.filter(hero => hero.id !== action.persoId);
      newTeam.push(perso);

      return nextState = {
        ...state,
        finalTeam: newTeam,
      }
    };

    case LOAD_DATA: {
      return nextState = {
        team: action.data.team,
        book: action.data.book,
        set: true,
        paragraph: action.data.paragraph,
        finalTeam: action.data.finalTeam,
        inGameNotes: action.data.inGameNotes,
      }
    };

    case GAIN_XP: {
      let currentPerso = state.finalTeam.find(perso => perso.id === action.persoId);
      currentPerso.xp += action.gain;

      let rankArray = [];
      ranks.forEach(rank => {
        if (currentPerso.xp >= rank.points) {
          rankArray.push(rank);
        }
      });
      let newRank = rankArray.slice(-1);

      currentPerso.oldLevel = currentPerso.level;
      currentPerso.level = newRank[0].level;

      database.forEach(dataByClass => {
        if (dataByClass.id === currentPerso.id) {
          let newSetOfCarac = dataByClass.carac.find(set => set.level === currentPerso.level)

          currentPerso.carac = newSetOfCarac;
          currentPerso.actualCarac = {
            'force': newSetOfCarac.force,
            'pouvoir': newSetOfCarac.pouvoir,
            'habilete': newSetOfCarac.habilete,
            'endurance': newSetOfCarac.endurance,
            'dommage': newSetOfCarac.dommage,
            'bonus': newSetOfCarac.bonus
          };
        }
      });

      let newTeam = state.finalTeam.filter(hero => hero.id !== currentPerso.id);
      newTeam.push(currentPerso);

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