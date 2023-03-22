import compute from './compute.js'
import { describe, test, expect } from 'vitest'
import { OPERATORS } from '../constants.js'

describe('compute', () => {
  test('should return current if operator is not defined', () => {
    expect(compute(1, 2)).toBe(2)
  })
  test('should return previous / current if operator is divide', () => {
    expect(compute(1, 2, OPERATORS.DIVIDE)).toBe(0.5)
  })
  test('should return previous * current if operator is multiply', () => {
    expect(compute(1, 2, OPERATORS.MULTIPLY)).toBe(2)
  })
  test('should return previous - current if operator is subtract', () => {
    expect(compute(1, 2, OPERATORS.SUBTRACT)).toBe(-1)
  })
  test('should return previous + current if operator is add', () => {
    expect(compute(1, 2, OPERATORS.ADD)).toBe(3)
  })
})
