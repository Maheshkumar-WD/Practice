import { RESET_CURR_EDIT, SET_CURR_EDIT } from "./actionTypes";

const setCurrEdit = (payload) => {
  return { type: SET_CURR_EDIT, payload: payload };
};
const resetCurrEdit = () => {
  return { type: RESET_CURR_EDIT };
};
export { setCurrEdit, resetCurrEdit };
