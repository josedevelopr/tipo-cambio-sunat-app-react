import React, { Component } from 'react'
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SeleccionarMesButton from './SeleccionarMesButton';
import TipoCambioTable from './TipoCambioTable';
import {getExchangeRateByMonth} from '../../actions/ExchangeRateActions';

class TipoCambioMensual extends Component {

    constructor(props)
    {   super();
        this.state = {
            dateToConsult : new Date()
        };

        this.onChangeMonth = this.onChangeMonth.bind(this);
    }

    componentDidMount()
    {
        const currentDate = new Date();
        this.props.getExchangeRateByMonth(currentDate.getMonth()+1, currentDate.getFullYear());
    }

    onChangeMonth(date)
    {
        this.setState({dateToConsult : date});
        this.props.getExchangeRateByMonth(date.getMonth()+1, date.getFullYear());
    }

    render() {

        const {exchange_rates} = this.props.exchangeRate;  
        const monthsList       = ["Enero","Febrero","Marzo",
                                  "Abril","Mayo","Junio",
                                  "Julio","Agosto","Setiembre",
                                  "Octubre","Noviembre","Diciembre"];

        return (
            <TipoCambioMensualContainer>
                <div className="title">
                    <h1><strong>Tipo Cambio Mensual</strong></h1> 
                </div>
                <div className="monthname">
                    <h1>{monthsList[this.state.dateToConsult.getMonth()].toUpperCase()}</h1>                    
                    <h1>{this.state.dateToConsult.getFullYear()}</h1>
                </div>
                <div className="button-section">
                    <SeleccionarMesButton
                     onChangeMonth={this.onChangeMonth}
                     date={this.state.dateToConsult}
                    />
                </div>
                <div className="tipoCambioTableSection">
                    <TipoCambioTable
                     exchangeRatelst = {exchange_rates}
                    />
                </div>
                
            </TipoCambioMensualContainer>            
        )
    }
}

TipoCambioMensual.propTypes = {
    getExchangeRateByMonth : PropTypes.func.isRequired,    
    exchangeRate : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    exchangeRate : state.exchangeRate
})

export default connect(mapStateToProps, {getExchangeRateByMonth}) (TipoCambioMensual);

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