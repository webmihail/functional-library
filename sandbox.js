'use strict'

const movies = require('./data/movies.json')

function map(list, fn){
  let result = [];

  for(let i = 0; i < list.length; i++){
    result[i] = fn(list[i], i, list)
  }

  return result;
}

let movieTitles = map(movies, (movie, index) => `${index}.movie.title`);

console.log(movieTitles);