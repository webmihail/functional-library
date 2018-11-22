'use strict'
//метод копирования массива
function flatten(lists){

  let result = [];
  
  for(let list of lists){
    result.push(...list);
  }

  return result;
}

module.exports = flatten;