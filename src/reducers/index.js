import {combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import exchangeRateReducer from "./exchangeRateReducer";

export default combineReducers ({    
    errors : errorsReducer,
    exchangeRate : exchangeRateReducer
});