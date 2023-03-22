/* eslint-env jest */
import React from 'react'
import Key from './Key.jsx'
import { render, screen, userEvent } from '../utils/test-utils.jsx'
import { vi } from 'vitest'

test('renders a button', () => {
  render(<Key onPoint={() => {}} variant="number">1</Key>)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('calls onPoint when clicked', () => {
  const onPoint = vi.fn()
  render(<Key onPoint={onPoint} variant="number">1</Key>)
  const button = screen.getByRole('button')
  userEvent.click(button)
  expect(onPoint).toHaveBeenCalled()
})

test('renders children', () => {
  render(<Key onPoint={() => {}} variant="number">1</Key>)
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('1')
})
