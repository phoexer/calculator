import React from 'react'
import Key from './Key'

export default {
  title: 'Key',
  component: Key
}

const Template = (args) => <Key {...args} />

export const Default = Template.bind({})
Default.args = {
  children: '6',
  onPoint: () => {}
}

export const Function = Template.bind({})
Function.args = {
  children: 'AC',
  onPoint: () => {},
  variant: 'function'
}

export const Operator = Template.bind({})
Operator.args = {
  children: '+',
  onPoint: () => {},
  variant: 'operator'
}

export const Zero = Template.bind({})
Zero.args = {
  children: '0',
  onPoint: () => {},
  variant: 'zero'
}

export const Point = Template.bind({})
Point.args = {
  children: '●',
  onPoint: () => {},
  variant: 'point'
}
