import { createContext, useReducer, useState } from "react";
import { TodoinitialState, todoReducer } from "../reducer/Todo/todoReducer";
export const todoContextInitialState = {
    todos:[],
    addTodo(payload){},
    getTodo(payload){}
}
export const TodoContext = createContext(todoContextInitialState);

export const TodoContextProvider = (props)=>{ 
    let [todos,setTodos] =useState([]);
    // let [todos,dispatch] = useReducer(todoReducer,TodoinitialState);
    let value = {
        todos:todos,
        addTodo(payload){
            // dispatch({type:"add",payload});
            setTodos(prev=>{
                return [...prev,payload]
            })
        },
        
    }
    return <TodoContext.Provider value={value}>
        {props.children}
    </TodoContext.Provider>
}