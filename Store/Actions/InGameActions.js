export const VALIDATION_CHOICE = 'action/VALIDATION_CHOICE';
export const RESET_STATE = 'action/RESET_STATE';
export const SET_PARAGRAPH = 'action/SET_PARAGRAPH';
export const SET_BOOK = 'action/SET_BOOK';
export const MANAGE_HERO = 'action/MANAGE_HERO';
export const SET_NOTES = 'action/SET_NOTES';
export const SUPP_NOTES = 'action/SUPP_NOTES';
export const SUPP_OBJET = 'action/SUPP_OBJET';

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

export const suppObjet = (id, classe) => {
  return { type: SUPP_OBJET, id, classe};
};