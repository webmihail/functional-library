'use strict'
const map = require('./src/lists/map');
const filter = require('./src/lists/filter');
const movies = require('./data/movies.json');

let result = map(
  filter(movies, movie => movie.raiting === 4.0),
  movie => movie.title);

console.log(result);