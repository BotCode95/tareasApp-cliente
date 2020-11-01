import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login'
import CrearCuenta from './components/auth/CrearCuenta'
import Proyectos from './components/proyectos/Proyectos'
import ProyectoState from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/crear-cuenta" component={CrearCuenta}/>
          <Route exact path="/proyectos" component={Proyectos}/>
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
