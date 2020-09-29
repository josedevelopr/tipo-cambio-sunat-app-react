import React, { Component } from 'react';
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CalendarButton from './CalendarButton';
import MenuActions from './MenuActions';
import {getCurrentExchangeRate,getExchangeRateByDate} from '../../actions/ExchangeRateActions';

class Home extends Component {

    constructor(props)
    {   super();
        this.state = {
            date : new Date()
        };

        this.onChangeDate = this.onChangeDate.bind(this);
    }

    componentDidMount(){        
        this.props.getCurrentExchangeRate();
    }

    onChangeDate(d){
        this.setState({date:d});
        // console.log(d);
        this.props.getExchangeRateByDate(d.getDate(), d.getMonth()+1, d.getFullYear());
    }

    render() {

        const {exchange_rate} = this.props.exchangeRate

        return (
            <HomeContainer>
                <div className="display-section">
                    <div className="title">
                        <h1>Dolar Hoy </h1>                          
                        <CalendarButton 
                         className="btnCalendar"
                         date={this.state.date}
                         onChangeDate={this.onChangeDate}
                        />                      
                    </div>
                    
                    <p className="t1">Precio Venta :</p>                                            
                    <div className="display-value">
                        <strong>S/.{exchange_rate.precioVenta}</strong>                                                                        
                    </div>
                    <p className="t1">Precio Compra :</p>                                            
                    <div className="display-value">
                        <strong>S/.{exchange_rate.precioCompra}</strong>                                                                        
                    </div>                   
                    {/* <div className="currency">
                        <p>nuevos soles</p>
                    </div> */}
                    <div className="action-buttons">
                        <MenuActions/>
                    </div>
                </div>
            </HomeContainer>
        )
    }
}

Home.propTypes = {
    getCurrentExchangeRate : PropTypes.func.isRequired,
    getExchangeRateByDate : PropTypes.func.isRequired,    
    exchangeRate : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    exchangeRate : state.exchangeRate
})

export default connect(mapStateToProps, {getCurrentExchangeRate,getExchangeRateByDate}) (Home);

const HomeContainer = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : var(--main-background);
    color : #020826;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .container-tipo-cambio{
        text-align:center;
        width: 95%;
    }

    .display-section {
        width : 90vw;
        height : 90vh;
        background-color : var(--secondary-background);      
        border-radius: 9px;  
        -webkit-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        -moz-box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
        box-shadow: 1px 20px 26px -1px rgba(0,0,0,0.51);
    }

    .title{
        width: 100%;
        height : 20vh;
        //background-color : red;
        color: #fff;        
        text-align : center;
        padding-top: 50px;
    }

    .title h1{
        margin-bottom: 15px;
    }

    .t1{
        text-align: center;
        color: #fff;
        padding-top:40px;
    }

    .display-value{
        width: 100%;
        height: 10vh;
        //background-color: red;        
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
        box-sizing: border-box;
    }

    .display-value strong{
        font-size : 1.5rem;
    }

    .currency{
        width: 100%;
        height: 5vh;
        text-align: center;
        color: #fff;
        font-size: 1.2rem;
        // background-color: red;
    }

    .action-buttons{
        width: 100%;
        height: 25vh;
        //background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;