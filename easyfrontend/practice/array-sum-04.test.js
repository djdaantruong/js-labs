import { calcCartTotal } from './array-sum-04'

describe('calcCartTotal()', () => {
  test('should return 0 if empty', () => {
    expect(calcCartTotal([])).toBe(0)
    expect(calcCartTotal({})).toBe(0)
    expect(calcCartTotal('')).toBe(0)
    expect(calcCartTotal(123)).toBe(0)
  })

  test('should return 0 if price of quantity is zero', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 0 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 0 },
    ]
    expect(calcCartTotal(cartItemList)).toBe(0)
  })

  test('should return correct tatol if price and quantity > 0', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ]
    expect(calcCartTotal(cartItemList)).toBe(250000)
  })
})
