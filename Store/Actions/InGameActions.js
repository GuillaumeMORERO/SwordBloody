export const VALIDATION_CHOICE = 'action/VALIDATION_CHOICE';
export const RESET_STATE = 'action/RESET_STATE';
export const SET_PARAGRAPH = 'action/SET_PARAGRAPH';
export const SET_BOOK = 'action/SET_BOOK';

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