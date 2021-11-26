type IconName = 'check' | 'bookmark' | 'menu'

export type IconType = {
  name: IconName
}

export type ImageDictionaryType = {
  [key: string]: {
    url: string
    alt: string
  }
}
