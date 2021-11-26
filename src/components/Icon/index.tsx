import React from 'react'

import { IconType, ImageDictionaryType } from './types'

import check from '../../assets/icons/check.svg'
import bookmark from '../../assets/icons/bookmark.svg'
import menu from '../../assets/icons/menu.svg'

const images: ImageDictionaryType = {
  check: { url: check, alt: 'Check' },
  bookmark: { url: bookmark, alt: 'Bookmark' },
  menu: { url: menu, alt: 'Menu' },
}

const Icon: React.FC<IconType> = ({ name }) => {
  return <img src={images[name].url} alt={images[name].alt} />
}

export const Check: React.VFC = () => <Icon name="check" />
export const Bookmark: React.VFC = () => <Icon name="bookmark" />
export const Menu: React.VFC = () => <Icon name="menu" />
