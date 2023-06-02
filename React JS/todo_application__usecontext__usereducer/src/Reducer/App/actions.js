import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export const add = (todo) => {
  return { type: ADD_TODO, payload: todo };
};
export const edit = ({id,data}) => {
  return { type: EDIT_TODO, payload: {id,data} };
};
export const delete_todo = (id) => {
  return { type: DELETE_TODO, payload: id };
};
