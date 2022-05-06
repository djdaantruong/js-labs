import { getTicketPrice } from './coding-exercise-1'

describe('getTicketPrice()', () => {
  test('should return -1 if data input undefined', () => {
    expect(getTicketPrice(-10)).toBe(-1)
    expect(getTicketPrice(130)).toBe(-1)
  })

  test('should return 0 when age under 6 or on 70', () => {
    expect(getTicketPrice(5)).toBe(0)
    expect(getTicketPrice(70)).toBe(0)
  })

  test('should return price 20000 when age from 6 to 11', () => {
    expect(getTicketPrice(6)).toBe(20000)
    expect(getTicketPrice(9)).toBe(20000)
  })

  test('should return price 50000 when age high 12', () => {
    expect(getTicketPrice(14)).toBe(50000)
  })
})
