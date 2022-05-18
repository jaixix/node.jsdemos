// Current Weather API Endpoint

//http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=Lucknow

import request from 'request'
const url = 'http://api.weatherstack.com/current?access_key=9b9e6a890726f0d1e867eda769c7d8c1&query=Lucknow';

request({url: url, json:true}, (error, response) => {
    // console.log(response.body);
    console.log(response.body.current.weather_descriptions + ". It is currently : " + 
    response.body.current.temperature + "'C in Lucknow!");
})