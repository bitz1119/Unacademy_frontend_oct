import { DEPOSIT, WITHDRAW } from "./Constants";

let initialState = {
    money : 0
}

// Take state and action and return updated state

export default function reducer(state=initialState,action){
    if(action.type === WITHDRAW){
        state = {...state,money :state.money-action.money };
    }
    else if(action.type === DEPOSIT){
        state = {...state,money :state.money+action.money };    
    }

    return state;
}