import React from 'react'
import styles from './Calculator.module.scss'
import Display from './Display.jsx'
import Key from './Key.jsx'
import { OPERATORS, PERCENT, PLUS_MINUS } from '../constants.js'
import compute from '../utils/compute.js'

const operations = Object.keys(OPERATORS).map((key) => OPERATORS[key])
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3']
const numberExceptions = ['0', '.']

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState('0')
  const [operator, setOperator] = React.useState(null)
  const [value, setValue] = React.useState(null)
  const [waitingForOperand, setWaitingForOperand] = React.useState(false)

  const clearDisplay = displayValue !== '0'
  const clearText = clearDisplay ? 'C' : 'AC'

  const clearAll = () => {
    setDisplayValue('0')
    setOperator(null)
    setWaitingForOperand(false)
    setValue(null)
  }
  const clearEntry = () => {
    setDisplayValue('0')
  }

  const clear = clearDisplay ? clearEntry : clearAll

  const handleNumber = (number) => {
    return () => {
      if (waitingForOperand) {
        setDisplayValue(number)
        setWaitingForOperand(false)
      } else {
        setDisplayValue(displayValue === '0' ? number : displayValue + number)
      }
    }
  }

  const changeSign = () => {
    const newValue = parseFloat(displayValue) * -1
    setDisplayValue(String(newValue))
  }

  const handlePercent = () => {
    const currentValue = parseFloat(displayValue)
    const computedValue = currentValue / 100
    setDisplayValue(String(computedValue))
  }

  const handleOperator = (nextOperator) => {
    return () => {
      if (value === null) {
        setValue(parseFloat(displayValue))
      } else if (operator) {
        const currentValue = parseFloat(displayValue)
        const computedValue = compute(value || 0, currentValue, operator)

        setDisplayValue(String(computedValue))
        setValue(computedValue)
      }
      setOperator(nextOperator)
      setWaitingForOperand(true)
    }
  }

  const inputPoint = () => {
    if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.')
    }
  }

  return (
        <div className={styles.container}>
            <Display value={displayValue}/>
            <div className={styles['key-container']}>
                <div className={styles.keys}>
                    <Key variant="function" onPoint={clear}>
                        {clearText}
                    </Key>
                    <Key variant="function" onPoint={changeSign}>
                        {PLUS_MINUS}
                    </Key>
                    <Key variant="function" onPoint={handlePercent}>
                        {PERCENT}
                    </Key>
                    {numbers.map((number) => (
                        <Key variant="number" onPoint={handleNumber(number)} key={number}>
                            {number}
                        </Key>
                    ))}
                    <Key variant="zero" onPoint={handleNumber('0')}>
                        {numberExceptions[0]}
                    </Key>
                    <Key variant="point" onPoint={inputPoint}>
                        {numberExceptions[1]}
                    </Key>
                </div>
                <div className={styles.operations}>
                    {operations.map((operation) => (
                        <Key variant="operator" onPoint={handleOperator(operation)} key={operation}>
                            {operation}
                        </Key>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Calculator
