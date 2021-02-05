import { useReducer } from "react"

export const AppActions = ['LOAD_METADATA'].reduce((obj, item) => { return {...obj, [item]:item}}, {})

export const AppReducer = (state, action) => {
    switch(action.type){
        case AppActions.LOAD_METADATA: return { ...state, config:action.payload }
        default: return state
    }
}

/***
 * Middleware for dispatch for handle async calls
 */
const isPromise = obj => {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }
export const AppMiddleware = (dispatch) => {
    return action => {
        if(isPromise(action.payload)){
            action.payload.then(v => { dispatch({type: action.type, payload:v})})
        }else{
            dispatch(action)
        }
    }
}

export const useAppReducer = (initialState) => {
    const [state, dispatch] = useReducer(AppReducer, {config:initialState})
    const dispatcher = (type, payload) => AppMiddleware(dispatch({type:type, payload:payload}))
    
    return [state, dispatcher]
}









