'use strict'
// метод для мемоизации(тоесть способность созанять промежуточные результаты выполнения какой-либо ф-ции)
function memoize(fn){
  let store = {};

  return function(arg){
    if(store[arg]){
      return store[arg]
    }else{
      store[arg] = fn(arg);
      return store[arg];
    }
  }
}
//Пример применения
// function getElement(selector){
//   return document.querySelector(selector);
// }

// console.log(memoize(getElement)('.fff'))

module.exports = memoize;