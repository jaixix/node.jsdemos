// Current Weather API Endpoint

//http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=Lucknow

import request from 'request';
import chalk from 'chalk';
import validator from 'validator';

const url = 'http://api.weatherstack.com/current?access_key=9b9e6a890726f0d1e867eda769c7d8c1&query=Lucknow';

request({url: url, json:true}, (error, response) => {
    if(validator.isURL(url)){
        console.log(chalk.green(response.body.current.weather_descriptions[0]) +
        ". It is currently : " + 
        chalk.yellow.inverse(response.body.current.temperature + "'C") + " in " + 
        chalk.redBright(response.body.location.name + ", " +
        response.body.location.region));
    }
    else{
        console.log("Invalid URL!");
    }
})