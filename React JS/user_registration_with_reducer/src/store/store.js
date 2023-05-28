import { useReducer } from "react"
import userReducer, { initialState as userInitialState } from "../Reducer/AppReducer"

let useStore = ()=>{
    const [user,userDispatch] = useReducer(userReducer,userInitialState);
    let state={
        users:user
    }
    let dispatchFun={
        userDispatch
    }
    return {state,dispatchFun}
}
export {useStore}