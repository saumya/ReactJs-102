import React from 'react';
//import logo from './logo.svg';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppConfig from './AppConfig';
import WeatherComp from './comps/Weather.comp';

function App() {

  //console.log('process.env.NODE_ENV=',process.env.NODE_ENV);
  const appConfig = AppConfig();
  // Checking for onLine/offLine
  console.log('Is it online?',window.navigator.onLine);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <WeatherComp apiFrom='Open Weather' appConfig={appConfig} weatherConfig={appConfig.api.weather} />  
    </React.Fragment>
  );
}

export default App;
