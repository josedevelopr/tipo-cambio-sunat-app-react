import axios from "axios";
import {GET_ERRORS,GET_CURRENT_EXCHANGE_RATE} from "./types";

export const getCurrentExchangeRate = (dia, mes, anio) => async dispatch => {
    //http://localhost:8080/api/tipo-cambio/por-dia?anio=2020&dia=22&mes=8
    const res = await axios.get(`http://localhost:8080/api/tipo-cambio/por-dia?anio=${anio}&dia=${dia}&mes=${mes}`);
    dispatch({
        type : GET_CURRENT_EXCHANGE_RATE,
        payload : res.data
    });
}