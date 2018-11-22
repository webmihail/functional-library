'use strict'

//метод для добавления данных из одного массива в другой 
function zip(left, right, fn){
  let result = [];

  for(let i = 0; i < Math.min(left.length, right.length); i++){
    result.push(fn(left[i], right[i]));
  }

  return result;
}

module.exports = zip;