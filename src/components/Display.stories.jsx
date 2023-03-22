import React from 'react'
import Display from './Display'

export default {
  title: 'Display',
  component: Display
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '909'
}
