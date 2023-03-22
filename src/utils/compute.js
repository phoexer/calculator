import { OPERATORS } from '../constants.js'

const compute = (previous = 0, current = 0, operator) => {
  switch (operator) {
    case OPERATORS.DIVIDE:
      return previous / current
    case OPERATORS.MULTIPLY:
      return previous * current
    case OPERATORS.SUBTRACT:
      return previous - current
    case OPERATORS.ADD:
      return previous + current
    default:
      return current
  }
}

export default compute
