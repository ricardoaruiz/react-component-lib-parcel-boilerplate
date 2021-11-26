import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Check, Bookmark, Menu } from './'

export default {
  title: 'RAR Components/Icons',
} as Meta

export const Icons: Story = () => (
  <div>
    <Check />
    <Bookmark />
    <Menu />
  </div>
)
