'use strict'
const map = require('./src/lists/map');
const filter = require('./src/lists/filter');
const movies = require('./data/movies.json');
const bookmarks = require('./data/bookmarks.json')
//метод для добавления данных из одного массива в другой
function zip(left, right, fn){
  let result = [];

  for(let i = 0; i < Math.min(left.length, right.length); i++){
    result.push(fn(left[i], right[i]));
  }

  return result;
}

let result = join(movies, bookmarks, (movie, bookmark) => {
  if()
});

console.log(result);