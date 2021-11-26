import React from 'react'

import { IconType, ImageDictionaryType, SpecificIconType } from './types'

import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'
import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'

import './styles.scss'

const images1: ImageDictionaryType = {
  check: CheckIcon,
  bookmark: BookmarkIcon,
  menu: MenuIcon,
}

const Icon: React.FC<IconType> = ({ name, width = '24px' }) => {
  return (
    <span className="icon">
      {React.createElement(images1[name], { style: { width } })}
    </span>
  )
}

export const Check: React.VFC<SpecificIconType> = ({ width }) => (
  <Icon name="check" width={width} />
)
export const Bookmark: React.VFC<SpecificIconType> = ({ width }) => (
  <Icon name="bookmark" width={width} />
)
export const Menu: React.VFC<SpecificIconType> = ({ width }) => (
  <Icon name="menu" width={width} />
)
