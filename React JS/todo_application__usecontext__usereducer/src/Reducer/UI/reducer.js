import { RESET_CURR_EDIT, SET_CURR_EDIT } from "./actionTypes";

export let uiReducerInitialState = {
  currentEdit: null,
};
const uiReducer = (state = uiReducerInitialState, { type, payload }) => {
  switch (type) {
    case SET_CURR_EDIT:
      return {
        ...state,
        currentEdit: payload,
      };
    case RESET_CURR_EDIT:
      return {
        ...state,
        currentEdit: null,
      };
    default:
      return state;
  }
};

export default uiReducer;
