import { formatSecondsV1, formatSecondsV2 } from './coding-exercise-8'

describe('formatSecondsV1()', () => {
  test('should return -1 when data input indefined', () => {
    expect(formatSecondsV1(-8)).toBe(-1)
  })

  test('should return string has two seconds when number has two digits ', () => {
    expect(formatSecondsV1(9)).toBe('09')
    expect(formatSecondsV1(20)).toBe('20')
  })
})

describe('formatSecondsV2()', () => {
  test('should return -1 when data input indefined', () => {
    expect(formatSecondsV2(-8)).toBe(-1)
  })

  test('should return string has two seconds when number has two digits ', () => {
    expect(formatSecondsV2(9)).toBe('09')
    expect(formatSecondsV2(20)).toBe('20')
  })
})
