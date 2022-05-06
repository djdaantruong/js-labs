import { formatTime } from './coding-exercise-9'

describe('formatTime()', () => {
  test('should return -1 when data input undefined', () => {
    expect(formatTime(-45)).toBe(-1)
  })

  test('should return result follow input', () => {
    expect(formatTime(0)).toBe('00:00:00')
    expect(formatTime(9)).toBe('00:00:09')
    expect(formatTime(4256)).toBe('01:10:56')
  })
})
