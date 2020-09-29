import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CalculadoraTipoCambio from './components/CalculadoraTipoCambio/CalculadoraTipoCambio';
import CalendarButton from './components/Home/CalendarButton';
import Home from './components/Home/Home';
import TipoCambioMensual from './components/TipoCambioMensual/TipoCambioMensual';
import {Provider} from "react-redux";
import store from "./store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />        
        <Route exact path="/tipo-cambio-por-mes" component={TipoCambioMensual} />      
        <Route exact path="/calculo-tipo-cambio" component={CalculadoraTipoCambio} />      
      </Router>
    </Provider>
  );
}

export default App;
