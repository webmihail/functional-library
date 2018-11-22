
//sort - метод для сортировки массива, а sortBy - callback, который задает условия сортировки(по чем сортировать)
module.exports = {
  sort(list,fn){
    return [...list].sort(fn);
  },

  sortBy(prop){
    return (a,b) => {
      if(a[prop] > b[prop]) return 1
      if(a[prop] < b[prop]) return -1
      return 0
    }
  }
}