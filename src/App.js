import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages';
import SigninPage from './Pages/signin';
import QuestionsPage from './Pages/questions';
import TwoFactorPage from './Pages/twofactor';
import MapPage from './Pages/map'
//import Barrington from './Pages/Barrington'

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/iprowebsite' component={Home} exact />
          <Route path='/iprowebsite/signin' component={SigninPage} exact />
          <Route path='/iprowebsite/questions' component={QuestionsPage} exact />
          <Route path = '/iprowebsite/twofactor' component={TwoFactorPage} exact />
          <Route path = '/iprowebsite/map' component={MapPage} exact />

          
      </Switch>
    </Router>
  );
}

export default App;
