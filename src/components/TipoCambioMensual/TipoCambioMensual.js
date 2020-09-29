import React, { Component } from 'react'
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SeleccionarMesButton from './SeleccionarMesButton';
import TipoCambioTable from './TipoCambioTable';

class TipoCambioMensual extends Component {

    constructor(props)
    {   super();
        this.state = {
            dateToConsult : new Date()
        };

        this.onChangeMonth = this.onChangeMonth.bind(this);
    }

    onChangeMonth(date){
        this.state({dateToConsult : date});
        console.log(date);        
    }

    render() {
        return (
            <TipoCambioMensualContainer>
                <div className="title">
                    <h1><strong>Tipo Cambio Mensual</strong></h1> 
                </div>
                <div className="monthname">
                    <h1>SETIEMBRE</h1>                    
                    <h1>2020</h1>
                </div>
                <div className="button-section">
                    <SeleccionarMesButton
                     onChangeDate={this.onChangeMonth}
                     date={this.state.dateToConsult}
                    />
                </div>
                <div className="tipoCambioTableSection">
                    <TipoCambioTable/>
                </div>
                
            </TipoCambioMensualContainer>            
        )
    }
}

export default connect(null, null) (TipoCambioMensual);

const TipoCambioMensualContainer = styled.div`
    width : 100%;
    min-height : 100vh;
    height : auto;
    background-color : var(--secondary-background);          
    padding-top: 10%;
    display: flex;
    flex-direction: column;   
    padding-bottom: 10%;
    .title h1{
        font-size: 2.5rem;
        color: #fff;
        border-bottom: 2px solid #fff;        
        padding-bottom: 10px;
        width: 80px;
        margin-left:10%;        
    }

    .monthname{
        font-size: 1.5rem;
        color: #fff;
        text-align: left;
        margin-top: 10%;
        padding-left:10%;
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

    .tipoCambioTableSection{
        margin-top: 35px;
        width: 95%;
        align-self: center;
    }
`;