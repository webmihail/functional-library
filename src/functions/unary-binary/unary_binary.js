'use strict'
//метод для выполнения ф-ции с оним или двумя аргументами
module.exports = {
  unary(fn){
    return arg => fn(arg);
  },

  binary(fn){
    return (arg1, arg2) => fn(arg1, arg2);
  }
}