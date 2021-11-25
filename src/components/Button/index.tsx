import React from 'react'

import { ButtonProps } from './types'

import webpack from '../../assets/images/webpack.png'
import reactlogo from '../../assets/images/react.svg'
// import { ReactComponent as Logo } from '../../assets/images/react.svg'

import './styles.scss'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button type="button" className={`button ${variant}`} {...props}>
      {children}
      <img src={webpack} alt="webpack" style={{ width: '24px' }} />
      <img src={reactlogo} alt="react logo" style={{ width: '24px' }} />
      {/* <Logo /> */}
    </button>
  )
}
