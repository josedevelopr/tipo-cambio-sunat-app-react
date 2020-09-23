import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import CalculadoraTipoCambio from './components/CalculadoraTipoCambio/CalculadoraTipoCambio';
import CalendarButton from './components/Home/CalendarButton';
import Home from './components/Home/Home';
import TipoCambioMensual from './components/TipoCambioMensual/TipoCambioMensual';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/tipo-cambio-por-mes" component={TipoCambioMensual} />      
      <Route exact path="/calculo-tipo-cambio" component={CalculadoraTipoCambio} />      
    </Router>
      
  );
}

export default App;
