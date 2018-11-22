'use strict'

function reduce(list, fn, initialValue){
  let acc;

  if(initialValue !== undefined){
    acc = initialValue;
  }else acc = list[0];

  if(initialValue || initialValue === 0){
    for(let item of list){
      acc = fn(acc, item, list);
      console.log(acc)
    }
  }else{
    for(let i = 1; i < list.length; i++){
      acc = fn(acc, list[i], list);
    }
  }

  return [acc];
}