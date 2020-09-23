import {GET_CURRENT_EXCHANGE_RATE} from "../actions/types";

const initialState = {
    exchange_rates : [],
    exchange_rate : {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CURRENT_EXCHANGE_RATE :
            return {
                ...state,
                exchange_rate : action.payload
            }
        break;
        default :
            return state;
    }
}