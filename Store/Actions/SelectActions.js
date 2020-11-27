  
export const RESET = 'action/RESET';
export const CHOOSEN_BOOK = 'action/CHOOSEN_BOOK';
export const MANAGE_HERO = 'action/MANAGE_HERO';

export const manageHero = (act, charac) => {
  return { type: MANAGE_HERO, act, charac };
};

export const resetSelection = () => {
  return { type: RESET};
};

export const choosenBook = (book) => {
  return { type: CHOOSEN_BOOK, book};
};
