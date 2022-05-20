// const path = require('path');
// const express = require('express');
// const hbs = require('hbs');
// const { application } = require('express');
// import request from 'request';

import path from 'path';
import express from 'express';
import hbs from 'hbs';
import getWeatherData from './utils/getWeatherData.js';
import { ppid } from 'process';
const app = express();

const dirname = 'C:\\Users\\jlalchandani\\vs-code-workplace\\node.jsdemos\\02-webapp\\src';

const publicDirectoryPath = path.join(dirname, '../public');
const viewsPath = path.join(dirname, '../templates/views');
const partialsPath = path.join(dirname, '../templates/partials');

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

app.get('/weather', (req, res) => {
    if (!req.query.city) {
      return res.send({
        error: 'You must provide a city !',
      });
    }
    getWeatherData(req.query.city, (data) => {
      res.render('', {
        title: 'Weather Report',
        city: req.query.city,
        weatherInfo: data,
        name: 'Jaideep Lalchandani',
      });
    });
  });

app.get('/products', (req,res) => {
    if(!req.query.search) {
        return res.send({
            error: "You need to provide a search term!"
        });
    }
    console.log(req.query.search);
    res.send({
        products : []
    });
});

app.get('/cityForm', (req,res) => {
    res.render('cityForm');
});

app.listen(8081, () => {
    console.log("Server is up and running on port 8081!");
});