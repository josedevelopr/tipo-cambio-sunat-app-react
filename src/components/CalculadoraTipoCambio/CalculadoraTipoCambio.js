import React, { Component } from 'react'
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import CalendarButton from '../Home/CalendarButton';

class CalculadoraTipoCambio extends Component {
    render() {
        return (
            <CalculadoraTipoCambioContainer>
                <div className="currency">
                    <div class="title">
                        <h1><strong>Calcular</strong></h1> 
                    </div>
                    <div class="currency-exchange">
                        <p>Fecha : 02/05/2020</p>
                        <br/>
                        <p>S/ : 3.212</p>                                                
                    </div>
                    <div className="button-section">
                        <CalendarButton/>
                    </div>
                </div>
                <div className="calculate-section">                    
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"                            
                            // onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">S/.</InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                    <br/>                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"                            
                            // onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                </div>
            </CalculadoraTipoCambioContainer>
        )
    }
}

export default CalculadoraTipoCambio;

const CalculadoraTipoCambioContainer = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : var(--main-background);    
    padding-top: 5vh;    
    
    .currency{
        box-sizing: border-box; 
        width : 90vw;
        height : 44vh;
        border-radius: 9px; 
        background-color : var(--secondary-background); 
        -webkit-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51); 
        margin: 0 auto;    
    }

    .title{
        width : 90vw;
        height : 15vh;
        //background-color : red;
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
        width: 90vw;
        height: 17vh;
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
        width: 90vw;
        height: 10vh;
        //background-color : green;
        display: flex;    
        justify-content: flex-end;
        padding-right: 15px;   
    }

    .calculate-section{
        box-sizing: border-box; 
        width : 90vw;
        height : 44vh;
        border-radius: 9px; 
        background-color : var(--secondary-background); 
        -webkit-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51); 
        margin: 0 auto;
        margin-top: 40px;
        padding: 25px;
    }
`;