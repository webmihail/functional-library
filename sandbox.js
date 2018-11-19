'use strict'

const movies = require('./data/movies.json')

function filter(list, fn){
  let result = [];

  for(let i = 0; i < list.length; i++){
    if (fn(list[i], i, list)) result.push(list[i]);
  }

  return result
}

let result = filter(movies, movie => movie.title === "Bad Boys")

console.log(result);