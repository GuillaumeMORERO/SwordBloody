export const VALIDATION_CHOICE = 'action/VALIDATION_CHOICE';
export const RESET_STATE = 'action/RESET_STATE';

export const validationChoices = (book, team, level) => {
  return { type: VALIDATION_CHOICE, book, team, level };
};

export const resetInGame = () => {
  return { type: RESET_STATE};
};