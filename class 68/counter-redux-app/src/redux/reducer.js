// function state and action and returns new State

import { constants } from "./actions"

let initialState = {
    counter : 0
}

const reducer = (state=initialState,action) =>{
    if(action.type === constants.INCREMENT){
        state = {
            ...state,
            counter:state.counter+1
        }
        return state;
    }
    else if(action.type === constants.DECREMENT){
        state = {
            ...state,
            counter:state.counter-1
        }
        return state;
    }
    else{
        return state;
    }
}

export default reducer;



