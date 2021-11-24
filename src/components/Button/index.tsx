import React from 'react'

import { ButtonProps } from './types'

import './styles.scss'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button type="button" className={`button ${variant}`} {...props}>
      {children}
    </button>
  )
}
