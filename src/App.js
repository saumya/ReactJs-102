import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';

function App() {

  function getWeatherInfo(){
    console.log('getWeatherInfo');
    const wCity = 'Bhubaneswar'
    const wAppID = 'yourApiKeyHERE';
    const wURL = 'https://api.openweathermap.org/data/2.5/weather?q='+wCity+'&APPID='+wAppID+'&units=metric';
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

      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }} variant="h3">
          Welcome to weather now.
        </Typography>
        
        <Button color="primary" size="medium" variant="contained" onClick={ getWeatherInfo }>
          Get Weather info
        </Button>
        
      </Container>
    </React.Fragment>
  );
}

export default App;