type IconName = 'check' | 'bookmark' | 'menu'

export type IconType = {
  name: IconName
  width?: string
}

export type SpecificIconType = Omit<IconType, 'name'>

export type ImageDictionaryType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
}
