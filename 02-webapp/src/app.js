const path = require('path');
const express = require('express');
// import request from 'request';
const app = express();

const url = 'http://api.weatherstack.com/current?access_key=9b9e6a890726f0d1e867eda769c7d8c1&query=Lucknow';


const publicDirectoryPath = path.join(__dirname, '../public');
console.log(publicDirectoryPath);

// app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));

app.get('/weather', (res,req) => {
    // request({url: url, json:true}, (error, response) => {
    //         var s = (response.body.current.weather_descriptions[0] +
    //         ". It is currently : " + 
    //         response.body.current.temperature + "'C in " + 
    //         response.body.location.name + ", " +
    //         response.body.location.region);
    //         console.log(s);
    // });
    res.send("Weather API!");
});

app.listen(8081, () => {
    console.log("Server is up and running on port 8081!");
});