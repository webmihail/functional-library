'use strict'

function map(list, fn){
  for(let i = 0; 1 < list.length; i++){
    fn(list[i], i, list)
  }
}