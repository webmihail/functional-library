'use strict'
const map = require('./src/lists/map');
const filter = require('./src/lists/filter');
const movies = require('./data/movie-lists.json')


function reduce(list, fn, initialValue){
  let acc;

  if(initialValue !== undefined){
    acc = initialValue;
  }else acc = list[0];

  if(initialValue || initialValue === 0){
    for(let item of list){
      acc = fn(acc, item, list);
      console.log(acc)
    }
  }else{
    for(let i = 1; i < list.length; i++){
      acc = fn(acc, list[i], list);
    }
  }

  return [acc];
}

let result = reduce(movies, (raiting, movie, list) => {
  console.log(movie.movies[0].raiting)
  return (raiting + movie.movies[0].raiting) / 2
}, 0);

console.log(result);