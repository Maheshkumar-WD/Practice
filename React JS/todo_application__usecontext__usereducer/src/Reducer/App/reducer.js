import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export let initialState = {
  todos: [],
};
const TodoReducer = (prevState = initialState, { type, payload }) => {
  console.log("reducer", payload);
  switch (type) {
    case ADD_TODO:
      return {
        ...prevState,
        todos: [...prevState.todos, payload],
      };
    case EDIT_TODO:
      let findOne = prevState.todos.findIndex((todo) => todo.id === payload.id);
      let copiedTodos = [...prevState.todos];
      copiedTodos[findOne] = { id: payload.id, title: payload.data };
      return {
        ...prevState,
        todos: copiedTodos,
      };
    case DELETE_TODO:
      let updated = [...prevState.todos].filter((prev) => prev.id !== payload);
      return {
        ...prevState,
        todos: updated,
      };
    default:
      return prevState;
  }
};

export default TodoReducer;
