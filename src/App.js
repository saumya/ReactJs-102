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

  function getWeatherInfo(){
    console.log('getWeatherInfo');

    const wCity = 'Bhubaneswar';
    const appConfig = AppConfig();
    const wURL = appConfig.api.weather.wURL+'&q='+ wCity +'&units=metric';
    
    //fetch(wURL).then(function(){}).catch(function(){});
    fetch(wURL).then(function(result){
      //console.log(result);
      console.log('Result Status = '+result.status);
      console.log('Status Info = '+result.statusText);
      console.log('Result Type = '+result.type);
      result.json().then(function(jResult){
        //console.log(jResult);
        if(jResult.cod===401){ 
          console.log('Details : '+jResult.message) 
        }else{
          console.log(jResult);
          console.log('==================== '+ wCity +' ==============');
          console.log('Temperature='+jResult.main.temp,'Humidity='+jResult.main.humidity);
          console.log('===============================================');
        }
      });
    }).catch(function(error){
      console.log('Error!');
      console.log(error);
      //console.log('Error Details: '+error.message);
    });
  }
  return (
    <React.Fragment>
      <CssBaseline />
      {/*
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload!?!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      */}

        <WeatherComp apiFrom='Open Weather' getWeatherInfo={getWeatherInfo} />
        
    </React.Fragment>
  );
}

export default App;
