import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '.'

it('teste', () => {
	render(<Button>Click me!</Button>)
  expect(screen.getByRole('button', { name: /click me!/i })).toBeInTheDocument()
})