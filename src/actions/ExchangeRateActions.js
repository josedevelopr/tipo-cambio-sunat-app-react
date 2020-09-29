import axios from "axios";
import {GET_ERRORS, 
        GET_CURRENT_EXCHANGE_RATE, 
        GET_EXCHANGE_RATE_BY_DATE, 
        GET_EXCHANGE_RATE_BY_MONTH} from "./types";
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

export const getExchangeRateByDate = (dia, mes, anio) => async dispatch => {     
    try {        
        let res = await axios.get(`http://localhost:8080/api/tipo-cambio/por-dia?anio=${anio}&dia=${dia}&mes=${mes}`);

        dispatch({
            type : GET_EXCHANGE_RATE_BY_DATE,
            payload : res.data
        });    
    } catch(error){
        console.log(error);
    }    
}

export const getExchangeRateByMonth = (mes, anio) => async dispatch => {     
    try {        
        let res = await axios.get(`http://localhost:8080/api/tipo-cambio/por-mes?anio=${anio}&mes=${mes}`);

        dispatch({
            type : GET_EXCHANGE_RATE_BY_MONTH,
            payload : res.data
        });    
    } catch(error){
        console.log(error);
    }    
}