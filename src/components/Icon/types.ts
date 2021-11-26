type IconName = 'check' | 'bookmark' | 'menu'

export type IconType = {
  name: IconName
}

export type ImageDictionaryType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
}
