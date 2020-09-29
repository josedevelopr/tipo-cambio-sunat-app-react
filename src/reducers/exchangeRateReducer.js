import {GET_CURRENT_EXCHANGE_RATE, 
        GET_EXCHANGE_RATE_BY_DATE, 
        GET_EXCHANGE_RATE_BY_MONTH} from "../actions/types";

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
        case GET_EXCHANGE_RATE_BY_DATE :
            return {
                ...state,
                exchange_rate : action.payload
            }
        break;
        case GET_EXCHANGE_RATE_BY_MONTH :
            return {
                ...state,
                exchange_rates : action.payload
            }
        break;
        default :
            return state;
    }
}