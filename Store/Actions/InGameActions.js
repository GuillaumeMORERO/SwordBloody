export const VALIDATION_CHOICE = 'action/VALIDATION_CHOICE';

export const validationChoices = (book, team) => {
  return { type: VALIDATION_CHOICE, book, team };
};