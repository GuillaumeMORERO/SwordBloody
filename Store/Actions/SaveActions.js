  
export const SAVE_STATE = 'action/SAVE_STATE';

export const saveState = (slot, stateToSave) => {
  return { type: SAVE_STATE, slot, stateToSave };
};
