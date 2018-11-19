'use strict'

function map(list, fn){
  let result = [];

  for(let i = 0; i < list.length; i++){
    result[i] = fn(list[i], i, list)
  }

  return result;
}

module.exports = map;