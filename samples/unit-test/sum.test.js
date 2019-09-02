import { sum } from './sum'

describe('Sum', () => {
  it('should return 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it('should return 0', () => {
    const result = sum(1, -1)
    expect(result).toBe(0)
  })

  it('should return -3', () => {
    const result = sum(-1, -2)
    expect(result).toBe(-3)
  })
})
