import { createContext, useReducer } from "react";
import TodoReducer, { initialState } from "../../Reducer/App/reducer";
import { add, edit, delete_todo } from "../../Reducer/App/actions";
import uiReducer, { uiReducerInitialState } from "../../Reducer/UI/reducer";
import { resetCurrEdit, setCurrEdit } from "../../Reducer/UI/actions";
const initContextState = {
  data: {
    ui: {
      isLoading: false,
      isError: false,
      currentEdit: null,
    },
    app: {
      todos: [],
    },
  },
  actions: {
    add(payload) {},
    edit(id,data) {},
    delete(id) {},
    currEdit(id) {},
  },
};
export const AppContext = createContext(initContextState);

const AppContextProvider = ({ children }) => {
  const [todos, todoDispatch] = useReducer(TodoReducer, initialState);
  const [ui, uiDispatch] = useReducer(uiReducer, uiReducerInitialState);
  console.log(todos);
  let value = {
    data: {
      ui: {
        isLoading: false,
        isError: false,
        currentEdit: ui.currentEdit,
      },
      app: {
        todos: todos.todos,
      },
    },
    actions: {
      add(todo) {
        todoDispatch(add(todo));
      },
      edit(id, data) {
        console.log("context",id,data)
        todoDispatch(edit({ id, data }));
        uiDispatch(resetCurrEdit())
      },
      delete(id) {
        todoDispatch(delete_todo(id));
      },
      currEdit(id) {
        uiDispatch(setCurrEdit(id));
      },
    },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
