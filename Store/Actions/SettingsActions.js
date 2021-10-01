export const SET_LANG = 'action/SET_LANG';
export const SET_COLOR = 'action/SET_COLOR';

export const langSetter = (lang) => {
  return { type: SET_LANG, lang };
};

export const colorSetter = (color) => {
  return { type: SET_COLOR, color };
};