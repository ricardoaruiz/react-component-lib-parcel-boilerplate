import React from 'react'

import { IconType, ImageDictionaryType } from './types'

import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'
import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'

const images1: ImageDictionaryType = {
  check: CheckIcon,
  bookmark: BookmarkIcon,
  menu: MenuIcon,
}

const Icon: React.FC<IconType> = ({ name }) => {
  return React.createElement(images1[name])
}

export const Check: React.VFC = () => <Icon name="check" />
export const Bookmark: React.VFC = () => <Icon name="bookmark" />
export const Menu: React.VFC = () => <Icon name="menu" />
