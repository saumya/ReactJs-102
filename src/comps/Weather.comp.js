// function component

import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function WeatherComp(props){

    //console.log('WeatherComp: process.env.NODE_ENV=',process.env.NODE_ENV);
    //console.log('WeatherComp: props',props);

    function getWeatherInfo(){
        console.log('WeatherComp:getWeatherInfo');

        const wCity = 'Bhubaneswar';
        //const appConfig = props.appConfig;
        //const wURL = appConfig.api.weather.wURL+'&q='+ wCity +'&units=metric';
        const wURL = props.weatherConfig.wURL+'&q='+ wCity +'&units=metric';
        
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

    return(
        <React.Fragment>
            <div className='compWeather'>WeatherComp using {props.apiFrom}.</div>
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

export default WeatherComp;