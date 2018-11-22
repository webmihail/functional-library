'use strict'
// переборка массива(ничего не возвращает)
function forEach(list, fn){
  for(let i = 0; i < list.length; i++){
    fn(list[i], i, list)
  }
}

module.exports = forEach;