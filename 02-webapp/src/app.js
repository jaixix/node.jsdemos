const path = require('path');
const express = require('express');
const hbs = require('hbs');
// import request from 'request';
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

console.log(publicDirectoryPath);
console.log(partialsPath);
console.log(viewsPath);

app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
      title: 'Weather Report',
      name: 'Jaideep Lalchandani',
    });
  });

app.get('/about', (req,res) => {
    res.render('about',{
        title : "About Us Dynamic",
        name : "Jaideep Lalcandani",
        author: "Picasso"
    });
});

app.get('/help', (req,res) => {
    res.render('help',{
        helptext : "Welcome to the product suport page!",
        title : "Help Page Dynamic",
        name : "Jaideep Lalcandani"
    });
});

app.get('/weather', (res,req) => {
    // request({url: url, json:true}, (error, response) => {
    //         var s = (response.body.current.weather_descriptions[0] +
    //         ". It is currently : " + 
    //         response.body.current.temperature + "'C in " + 
    //         response.body.location.name + ", " +
    //         response.body.location.region);
    //         console.log(s);
    // });
    res.send({
        forecast: 'It is cloudy',
        location: 'Lucknow',
      });
});

app.listen(8081, () => {
    console.log("Server is up and running on port 8081!");
});