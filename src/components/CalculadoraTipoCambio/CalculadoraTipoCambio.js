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
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {format} from 'date-fns';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom";

import { getCurrentExchangeRate,
         getExchangeRateByDate } from '../../actions/ExchangeRateActions';
import CalendarButton from '../Home/CalendarButton';

class CalculadoraTipoCambio extends Component {

    constructor(props)
    {   super();
        this.state = 
        {
            date : new Date(),
            nuevosSoles : '',
            dolares : '',
            calculo : 'S',
            errores : ''
        };

        this.onChangeDate           = this.onChangeDate.bind(this);
        this.onChange               = this.onChange.bind(this);
        this.onCalculate            = this.onCalculate.bind(this);        
        this.onChangeCalculateType  = this.onChangeCalculateType.bind(this);        
        this.clearState             = this.clearState.bind(this);                
    }

    componentDidMount()
    {        
        this.props.getCurrentExchangeRate();
    }

    onChange(e)
    {
        this.setState({[e.target.name] : e.target.value})
    }

    onChangeDate(d)
    {
        let fecha = format(d,'dd/MM/yyyy');
        this.setState({date:d});
        this.setState({titulo : 'Dolar al '+fecha});
        // console.log(d);
        this.props.getExchangeRateByDate(d.getDate(), d.getMonth()+1, d.getFullYear());        
    }

    onChangeCalculateType()
    {
        let changeType = this.state.calculo == 'S' ? 'D' : 'S';
        this.setState({calculo : changeType});
        this.clearState();
    }

    onCalculate(){
        let calculateType = this.state.calculo;                
        let {precioVenta} = this.props.exchangeRate.exchange_rate;
        let resultado = 0;
        switch(calculateType)
        {            
            case "D" :                  
                let nuevosSoles = this.state.nuevosSoles;                
                if(nuevosSoles == '')
                {
                    this.setState({errores : {
                        titulo : 'Campo vacío',
                        mensaje : 'El campo "Dólares" no debe estar vacío.'
                    }});    
                } else 
                {
                    resultado = nuevosSoles / precioVenta;
                    this.setState({dolares : resultado});              
                    this.setState({errores : ''});    
                }                
                break;
            default :
                let dolares = this.state.dolares;                
                if(dolares == '')
                {
                    this.setState({errores : {
                        titulo : 'Campo vacío',
                        mensaje : 'El campo "Soles" no debe estar vacío.'
                    }});    
                } else 
                {
                    resultado = dolares * precioVenta;
                    this.setState({nuevosSoles : resultado});
                    this.setState({errores : ''});    
                }                
        }
    }

    clearState(){
        this.setState({dolares : '', nuevosSoles : ''});         
    }

    render() {
        const {exchange_rate} = this.props.exchangeRate
        let fecha = format(this.state.date,'dd/MM/yyyy');        
        
        return (
            <CalculadoraTipoCambioContainer>
                <div className="container">
                    <div className="currency">
                        <div className="title">
                            <h1><strong>Tipo Cambio</strong></h1> 
                        </div>
                        <div className="currency-exchange">
                            <p>Fecha : {fecha}</p>
                            <br/>
                            <p>S/ : {exchange_rate.precioVenta}</p>                                                
                        </div>
                        <div className="button-section">
                            <CalendarButton 
                            className="btnCalendar"
                            date={this.state.date}
                            onChangeDate={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="calculate-section">  
                        <div className="title">
                            <h1><strong>Calcular</strong></h1> 
                        </div>                  
                        <FormControl fullWidth variant="outlined" className="item-calc">
                        <InputLabel htmlFor="outlined-adornment-amount">Dólares</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"                            
                                // onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                                name="dolares"
                                placeholder="0.00"
                                onChange={this.onChange}
                                type="number"
                                value={this.state.dolares}
                                disabled={this.state.calculo == 'D' ? true : false}
                            />                        
                        </FormControl>
                        
                        <Fab 
                            color="primary" 
                            className="btnCenter"
                            onClick={this.onChangeCalculateType}
                            style={this.state.calculo == 'S' ? {transform: "scaleY(1)"} : {transform: "scaleY(-1)"}}
                        >
                            <ArrowDownwardIcon />
                        </Fab>
                        
                        <FormControl fullWidth variant="outlined" className="item-calc">
                            <InputLabel htmlFor="outlined-adornment-amount">Nuevos Soles</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"                                                        
                                name="nuevosSoles"
                                placeholder="0.00"
                                onChange={this.onChange}
                                startAdornment={<InputAdornment position="start">S/.</InputAdornment>}
                                labelWidth={60}
                                type="number"
                                value={this.state.nuevosSoles}
                                disabled={this.state.calculo == 'S' ? true : false}
                            />
                        </FormControl>
                        <div className="btnCalculate" onClick={this.onCalculate}>
                            <DragHandleIcon style={{fill: "white"}}/>
                        </div>
                    </div> 
                </div>                 
                {
                    this.state.errores != '' &&
                    (
                        <React.Fragment>
                            <Alert 
                            severity="error"                  
                            >
                                <AlertTitle>{this.state.errores.titulo}</AlertTitle>
                                {this.state.errores.mensaje}
                            </Alert>   
                        </React.Fragment>                    
                    )
                }             
                  
                <Button                     
                    component="span"
                    component={Link}
                    to="/"
                    style={{height:"40px"}}
                    className="btnRegresar"
                >                    
                    < ArrowBackIosIcon style={{fill:"#fff"}}/>
                    <p style={{color:"#fff", paddingLeft:"5px", fontSize:"15px"}}>Regresar</p>
                    
                </Button >               
            </CalculadoraTipoCambioContainer>
        )
    }
}

CalculadoraTipoCambio.propTypes = {
    getCurrentExchangeRate : PropTypes.func.isRequired,
    getExchangeRateByDate : PropTypes.func.isRequired,    
    exchangeRate : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    exchangeRate : state.exchangeRate
})

export default connect(mapStateToProps, {getCurrentExchangeRate,getExchangeRateByDate}) (CalculadoraTipoCambio);

const customMedia = generateMedia({
    mdDesktop : '1350px',    
    smDesktop: '1000px',    
    tablet: '740px',
    mdtablet : '640px',
    mdMobile : '500px',
});

const CalculadoraTipoCambioContainer = styled.div`
    width : 100%;
    min-height:100vh;
    height: 100%;
    background-color : var(--main-background);    
    padding-top: 5%;    
    display: flex;
    flex-direction: column;
    //padding-bottom: 10%;  
    ${customMedia.greaterThan('tablet')`                
       padding-top: 5%;
       box-sizing: border-box;
    `} 
    .container{        
        height:auto;
        width: 100%;        
    ${customMedia.greaterThan('tablet')`                
        display: flex;
        align-items: center;
        justify-content: center;
        //background-color : pink;
    `} 
    }
    .currency{
        padding-bottom: 2rem;
        box-sizing: border-box; 
        width : 90%;
        height : auto;
        border-radius: 9px; 
        background-color : var(--secondary-background); 
        -webkit-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51); 
        margin: 0 auto;
        ${customMedia.greaterThan('mdMobile')`
            width : 65%;
        `} 
        ${customMedia.greaterThan('tablet')`
            width : 45%;
            padding-bottom: 1rem;
        `}    
        ${customMedia.greaterThan('smDesktop')`                
            width : 30%;
        `} 
    }

    .title{
        width : 100%;
        height : auto;
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
        ${customMedia.greaterThan('tablet')`
            font-size: 1.5rem;    
            width: auto;
        `}
    }

    .currency-exchange{
        width: 100%;
        height: 35%;
        padding: 25px;
        box-sizing: border-box;
        //background-color : red;  
        ${customMedia.greaterThan('tablet')`
            padding: 0 25px;
        `}   
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
        ${customMedia.greaterThan('mdMobile')`
            width : 65%;             
        `}
        ${customMedia.greaterThan('tablet')`
            width : 45%;
            margin-top: 0;       
        `}
        ${customMedia.greaterThan('smDesktop')`                
            width : 30%;
        `}  
    }

    .item-calc{     
        align-self: center;
        width: 90%;
        padding-top: 1rem;
    }
    
    .btnCenter{
        align-self: center;
        margin: 5rem 0;  
        ${customMedia.greaterThan('tablet')`
            margin:  2rem 0;  
        `}      
    }

    .btnCalculate{
        width: 100%;
        height: 55px;
        background-color: #f50057;
        display: flex;
        align-items: center;
        justify-content: center;   
        margin-top:20%;
        border-radius: 0 0 9px 9px; 
    }
    .btnRegresar{
        padding: 50px 0;
    }
`;