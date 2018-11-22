'use strict'
//метод для того чтобы сделать что нибудь с массивом(в результате возвращает новый массив)
function map(list, fn){
  let result = [];

  for(let i = 0; i < list.length; i++){
    result[i] = fn(list[i], i, list)
  }

  return result;
}

module.exports = map;