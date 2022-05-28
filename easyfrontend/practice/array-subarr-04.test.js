import { findAllPositiveEvenSubArr } from './array-subarr-04'

describe('findAllPositiveEvenSubArr()', () => {
  test('should return 0 if array is empty', () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([])
    expect(findAllPositiveEvenSubArr({})).toEqual([])
    expect(findAllPositiveEvenSubArr('')).toEqual([])
    expect(findAllPositiveEvenSubArr(123)).toEqual([])
    expect(findAllPositiveEvenSubArr(true)).toEqual([])
  })

  test('should return empty if no continous even sub array', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 3, 5, 8, 9])).toEqual([])
  })

  test('should return correct sub array list if has even sub array', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ])
  })
})
