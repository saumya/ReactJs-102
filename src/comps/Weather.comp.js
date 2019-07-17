// function component

import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function WeatherComp(props){
    return(
        <React.Fragment>
            <div className='compWeather'>WeatherComp using {props.apiFrom}.</div>
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }} variant="h3">
                Welcome to weather now.
                </Typography>
                
                <Button color="primary" size="medium" variant="contained" onClick={ props.getWeatherInfo }>
                Get Weather info
                </Button>
                
            </Container>
        </React.Fragment>
    );
}

export default WeatherComp;