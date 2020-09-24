import axios from "axios";
import {GET_ERRORS,GET_CURRENT_EXCHANGE_RATE} from "./types";
import add from 'date-fns/add';

export const getCurrentExchangeRate = () => async dispatch => {    
    let consultDate = new Date();    
    let dia = consultDate.getDate(), 
        mes = consultDate.getMonth()+1, 
        anio = consultDate.getFullYear();    

    try {        
        let res = await axios.get(`http://localhost:8080/api/tipo-cambio/por-dia?anio=${anio}&dia=${dia}&mes=${mes}`);

        dispatch({
            type : GET_CURRENT_EXCHANGE_RATE,
            payload : res.data
        });    
    } catch(error){
        console.log(error);
    }    
}