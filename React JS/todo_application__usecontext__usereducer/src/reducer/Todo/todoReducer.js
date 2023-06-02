export let TodoinitialState = {
    todos:[],
}
export const todoReducer = (state=TodoinitialState,{type,payload})=>{
    switch (type) {
        case "add":
            return {
                ...state,
                todos:[...state.todos,payload],
            }
    
        default:
            return state
    }
}