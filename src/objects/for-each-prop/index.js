'use strict'
//метод для переборуи ключей обьекта
function forEachProp(obj, fn){
  let keys = Object.keys(obj);

  for(let key of keys){
    fn(key, obj[key], obj);
  }
}

module.exports = forEachProp;