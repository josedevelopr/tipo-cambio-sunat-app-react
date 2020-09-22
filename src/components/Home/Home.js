import React, { Component } from 'react';
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query';
import CalendarButton from './CalendarButton';
import MenuActions from './MenuActions';

class Home extends Component {
    render() {

        return (
            <HomeContainer>
                <div className="display-section">
                    <div className="title">
                        <h1>Dolar Hoy </h1>                          
                        <CalendarButton className="btnCalendar"/>                      
                    </div>                                       
                    <div className="display-value">
                        <strong>3.546</strong>                                                                        
                    </div>
                    <div className="currency">
                        <p>nuevos soles</p>
                    </div>
                    <div className="action-buttons">
                        <MenuActions/>
                    </div>
                </div>
            </HomeContainer>
        )
    }
}

export default Home;

const HomeContainer = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : #ffab8f;
    color : #020826;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .display-section {
        width : 90vw;
        height : 90vh;
        background-color : #2b3166;      
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

    .display-value{
        width: 100%;
        height: 30vh;
        //background-color: red;        
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
        box-sizing: border-box;
    }

    .display-value strong{
        font-size : 5rem;
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