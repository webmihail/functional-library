'use strict'
//метод для выполнения ф-ции единожды
function once(fn){
  let fnCalled = false;

  return function(...args){
    if(!fnCalled){
      fn(...args);
      fnCalled = true;
    }
  }
}

module.exports = once