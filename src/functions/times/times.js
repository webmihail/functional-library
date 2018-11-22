'use strict'
//метод для выполнения ф-ции заданного кол-ва раз
function times(num, fn){
  return function(...args){
    for(let i = 0; i < num; i++){
      fn(...args)
    }
  }
}

module.exports = times