import { ADD, DISABLE } from "./actionTypes";

export let initialState = [];
let reducer = (state=initialState,action)=>{
    let {type,payload} = action;
    switch (type) {
        case ADD:
            return [...state,payload]
            case DISABLE:
                let copied = [...state];
                let findIndex = copied.findIndex(prev=>prev.email===payload.email)
                copied[findIndex].disable = payload.status
                return copied
        default:
            return state
    }
}
export default reducer;