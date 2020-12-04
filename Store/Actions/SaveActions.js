export const MANAGE_STATE = 'action/SAVE_STATE';

export const manageState = (action, slot, stateToSave) => {
  return { type: MANAGE_STATE, action, slot, stateToSave };
};
