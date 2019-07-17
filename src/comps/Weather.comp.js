// function component

import React from 'react';

function WeatherComp(props){
    return(
        <div className='compWeather'>WeatherComp using {props.apiFrom}.</div>
    );
}

export default WeatherComp;