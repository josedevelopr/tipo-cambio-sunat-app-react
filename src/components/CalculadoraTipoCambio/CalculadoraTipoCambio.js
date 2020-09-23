import React, { Component } from 'react'
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DragHandleIcon from '@material-ui/icons/DragHandle';

import CalendarButton from '../Home/CalendarButton';

class CalculadoraTipoCambio extends Component {
    render() {
        return (
            <CalculadoraTipoCambioContainer>
                <div className="currency">
                    <div className="title">
                        <h1><strong>Tipo Cambio</strong></h1> 
                    </div>
                    <div className="currency-exchange">
                        <p>Fecha : 02/05/2020</p>
                        <br/>
                        <p>S/ : 3.212</p>                                                
                    </div>
                    <div className="button-section">
                        <CalendarButton/>
                    </div>
                </div>
                <div className="calculate-section">  
                    <div className="title">
                        <h1><strong>Calcular</strong></h1> 
                    </div>                  
                    <FormControl fullWidth variant="outlined" className="item-calc">
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"                            
                            // onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">S/.</InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                    
                    <Fab color="primary" className="btnCenter">
                        <ArrowDownwardIcon />
                    </Fab>
                    
                    <FormControl fullWidth variant="outlined" className="item-calc">
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"                            
                            // onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                </div>                          
                <div className="btnCalculate">
                    <DragHandleIcon style={{fill: "white"}}/>
                </div>      
            </CalculadoraTipoCambioContainer>
        )
    }
}

export default CalculadoraTipoCambio;

const CalculadoraTipoCambioContainer = styled.div`
    width : 100%;
    height : 100%;
    background-color : var(--main-background);    
    padding-top: 5%;    
    display: flex;
    flex-direction: column;
    //padding-bottom: 10%;  
    .currency{
        box-sizing: border-box; 
        width : 90%;
        height : 350px;
        border-radius: 9px; 
        background-color : var(--secondary-background); 
        -webkit-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51); 
        margin: 0 auto;    
    }

    .title{
        width : 100%;
        height : 40%;
        //background-color : pink;
        padding: 25px;
        box-sizing: border-box;        
    }
    .title h1{
        font-size: 2.5rem;
        color: #fff;
        border-bottom: 2px solid #fff;        
        padding-bottom: 10px;
        width: 80px;
    }

    .currency-exchange{
        width: 100%;
        height: 35%;
        padding: 25px;
        box-sizing: border-box;
        //background-color : red;   
    }
    .currency-exchange p{
        color: #fff;
        font-size: 1.2rem;
    }

    .button-section{
        box-sizing: border-box;
        width: 100%;
        height: 20%;
        //background-color : green;
        display: flex;    
        justify-content: flex-end;
        padding-right: 5%;   
    }

    .calculate-section{
        box-sizing: border-box; 
        width : 90%;
        height : auto;
        border-radius: 9px; 
        background-color : var(--secondary-background); 
        -webkit-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51); 
        margin: 0 auto;
        margin-top: 10%;        
        display: flex;
        flex-direction: column;      
        padding-bottom: 15%;  
    }

    .item-calc{     
        align-self: center;
        margin-top: 2rem;
        width: 90%;
    }
    
    .btnCenter{
        margin-top: 1rem;
        align-self: center;
    }

    .btnCalculate{
        width: 100%;
        height: 70px;
        background-color: #f50057;
        display: flex;
        align-items: center;
        justify-content: center;   
        margin-top:10%;
    }
`;