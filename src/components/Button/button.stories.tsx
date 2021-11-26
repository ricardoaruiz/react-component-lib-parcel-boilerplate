import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from './'
import { ButtonProps } from './types'

export default {
  title: 'RAR Components/Button',
  component: Button,
} as Meta

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me!</Button>
)
Primary.args = {
  variant: 'primary',
}

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me!</Button>
)
Secondary.args = {
  variant: 'secondary',
}
