//
// ref: react-router v4 : https://css-tricks.com/react-router-4/

//import logo from './logo.svg';
import './App.css';

import React from 'react';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppConfig from './AppConfig';
import WeatherComp from './comps/Weather.comp';
import HomePage from './comps/HomePage.component';
import AboutPage from './comps/AboutPage.component';

function App() {

  //console.log('process.env.NODE_ENV=',process.env.NODE_ENV);
  const appConfig = AppConfig();
  // Checking for onLine/offLine
  console.log('Is it online?',window.navigator.onLine);
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <WeatherComp apiFrom='Open Weather' appConfig={appConfig} weatherConfig={appConfig.api.weather} />  

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
