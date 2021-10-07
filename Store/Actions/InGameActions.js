export const VALIDATION_CHOICE = 'action/VALIDATION_CHOICE';
export const RESET_STATE = 'action/RESET_STATE';
export const SET_PARAGRAPH = 'action/SET_PARAGRAPH';
export const SET_BOOK = 'action/SET_BOOK';
export const MANAGE_HERO = 'action/MANAGE_HERO';
export const SET_NOTES = 'action/SET_NOTES';
export const SUPP_NOTES = 'action/SUPP_NOTES';
export const SUPP_OBJET = 'action/SUPP_OBJET';
export const ADD_OBJET = 'action/ADD_OBJET';
export const REPLACE_BOOK = 'action/REPLACE_BOOK';
export const MODIF_CARAC = 'action/MODIF_CARAC';
export const QTE_USE_OBJECT = 'action/QTE_USE_OBJECT';
export const LOAD_DATA = 'action/LOAD_DATA';
export const GAIN_XP = 'action/GAIN_XP';

export const manageHero = (action, charac) => {
  return { type: MANAGE_HERO, action, charac };
};

export const validationChoices = (book, team, level) => {
  return { type: VALIDATION_CHOICE, book, team, level };
};

export const resetInGame = () => {
  return { type: RESET_STATE};
};

export const setParagraph = (num) => {
  return { type: SET_PARAGRAPH, num};
};

export const setBook = (book) => {
  return { type: SET_BOOK, book};
};

export const setNotes = (notes) => {
  return { type: SET_NOTES, notes};
};

export const suppNotes = (id) => {
  return { type: SUPP_NOTES, id};
};

export const suppObjet = (id, persoId) => {
  return { type: SUPP_OBJET, id, persoId};
};

export const addObject = (objet, persoId) => {
  return { type: ADD_OBJET, objet, persoId};
};

export const replaceBook = (bookId) => {
  return { type: REPLACE_BOOK, bookId};
};

export const modifCarac = (modif, persoId) => {
  return { type: MODIF_CARAC, modif, persoId};
};

export const qteUseObject = (value, idItem, persoId) => {
  return { type: QTE_USE_OBJECT, value, idItem, persoId};
};

export const loadData = (data) => {
  return { type: LOAD_DATA, data};
};

export const xpGain = (gain, persoId) => {
  return { type: GAIN_XP, gain, persoId};
};
