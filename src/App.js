import React from 'react';
//import logo from './logo.svg';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
/*
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
*/
import AppConfig from './AppConfig';
import WeatherComp from './comps/Weather.comp';

function App() {

  //console.log('process.env.NODE_ENV=',process.env.NODE_ENV);
  const appConfig = AppConfig();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <WeatherComp apiFrom='Open Weather' appConfig={appConfig} weatherConfig={appConfig.api.weather} />  
    </React.Fragment>
  );
}

export default App;
