const sortableArr = require('./sortableArr');

describe('sortableArr', () => {
  test('function is declareted', () => {
    expect(sortableArr).toBeDefined()
  });

  test('is an Array', () => {
    let numbers = [{id:5},{id:2},{id:3},{id:4},{id:1}];
    expect(sortableArr.sort(numbers, sortableArr.sortBy('id'))).toBeInstanceOf(Array)
  });

  test('to equal', () => {
    let numbers = [{id:5},{id:2},{id:3},{id:4},{id:1}];
    expect(sortableArr.sort(numbers, sortableArr.sortBy('id'))).toEqual([{"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}]);
  })
})