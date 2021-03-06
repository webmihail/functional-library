'use strict'
//метод фильтра массива с помощью callback и в результате получаем новый массив(отфильтрованый)
function filter(list, fn){
  let result = [];

  for(let i = 0; i < list.length; i++){
    if (fn(list[i], i, list)) result.push(list[i]);
  }

  return result
}

module.exports = filter;