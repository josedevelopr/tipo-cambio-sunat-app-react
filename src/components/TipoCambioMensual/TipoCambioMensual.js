import React, { Component } from 'react'
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom";

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
                <div className="consultSection">
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
                </div>                
                
                <div className="tipoCambioTableSection">
                    <TipoCambioTable
                     exchangeRatelst = {exchange_rates}
                    />
                    {/* <IconButton 
                        component="span"
                        component={Link}
                        to="/"
                        style={{ paddingTop:"35px",}}
                        className="btnRegresar"
                    >                    
                        < ArrowBackIosIcon style={{fill:"#fff"}}/>
                        <p style={{color:"#fff", paddingLeft:"5px"}}>Regresar</p>
                        
                    </IconButton > */}
                    <div className="btnSection">
                        <IconButton                     
                            component="span"
                            component={Link}
                            to="/"
                            style={{height:"40px"}}
                            className="btnRegresar"
                        >                    
                            < ArrowBackIosIcon style={{fill:"#fff"}}/>
                            <p style={{color:"#fff", paddingLeft:"5px", fontSize:"15px"}}>Regresar</p>
                            
                        </IconButton >
                    </div>                    
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

const customMedia = generateMedia({
    mdDesktop : '1350px',        
    smDesktop: '850px',
    mdtablet : '640px',
    mdMobile : '500px',
});

const TipoCambioMensualContainer = styled.div`
    width : 100%;
    min-height : 100vh;
    height : auto;
    background-color : var(--secondary-background);          
    padding-top: 10%;
    display: flex;
    flex-direction: column;   
    //padding-bottom: 10%;        
    ${customMedia.greaterThan('smDesktop')`
        padding-top: 3%;
        //background-color:black;
        flex-direction: row;
        padding-bottom: 0;  
    `}
    .consultSection{
        ${customMedia.greaterThan('mdtablet')`
            // background-color:red;
            width:70%;
            margin: 0 auto;
        `}
        ${customMedia.greaterThan('smDesktop')`
            // background-color:red;
            width:25%;
            margin: 0;
            padding-left:10%;
            padding-right:10%;
        `}
    }
    .title{
        ${customMedia.greaterThan('mdtablet')`
            margin: 0 auto;
            width: 100%;            
            // background-color: green;
        `}     
    }
    .title h1{
        font-size: 2.5rem;
        color: #fff;
        border-bottom: 2px solid #fff;        
        padding-bottom: 10px;
        width: 80px;
        margin-left:10%;  
        ${customMedia.greaterThan('mdtablet')`
            margin-left:0;
            width: 100%;
            font-size: 2.3rem;
            // background-color: pink;
        `}      
    }

    .monthname{
        font-size: 1.5rem;
        color: #fff;
        text-align: left;
        margin-top: 10%;
        padding-left:10%;
        ${customMedia.greaterThan('mdtablet')`
            padding-left:0;
            //background-color: pink;
            font-size: 0.9rem;
        `}
    }

    .button-section{
        box-sizing: border-box;
        width: 100%;
        height: 20%;
        // background-color : green;
        display: flex;    
        justify-content: flex-end;
        padding: 5%;
        ${customMedia.greaterThan('mdtablet')`
            padding-left:0;
            //background-color: pink;
            font-size: 0.9rem;
        `}
        ${customMedia.greaterThan('smDesktop')`
            padding:0;
            background-color : green;            
            height: 50px;
            margin-top: 5%;
        `}
    }

    .tipoCambioTableSection{
        margin-top: 35px;
        width: 95%;
        align-self: center;
        padding-bottom : 35px;
        //background-color:pink;
        ${customMedia.greaterThan('mdtablet')`
            // background-color:blue;
            width:70%;
        `}
        ${customMedia.greaterThan('smDesktop')`
            margin-top: 0px;
            //background-color:red;
            width:50%;
        `}
    }
    .btnSection{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btnRegresar{
        //background-color:blue;        
        margin: 0 auto;
        align-self: center;
    }
`;