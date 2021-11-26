import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Check, Bookmark, Menu } from './'

export default {
  title: 'RAR Components/Icons',
} as Meta

export const Icons: Story = () => (
  <div>
    <Check />
    <Check width="32px" />
    <Check width="48px" />

    <Bookmark />
    <Bookmark width="32px" />
    <Bookmark width="48px" />

    <Menu />
    <Menu width="32px" />
    <Menu width="48px" />
  </div>
)
