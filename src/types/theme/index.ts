export type AllowedColors = 'black' | 'grey' | 'purple' | 'white'
export type AllowedCursor = 'pointer' | 'auto'
export type AllowedFonts = 'Poppins' | 'Poppins Italic' | 'Poppins Medium' | 'Poppins Regular' | 'Recoleta' |'sans-serif' 
export type AllowedFontSizes = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'
export type AllowedOverflow = 'hidden' | 'scroll'
export type AllowedRadius = 'small' | 'medium' | 'large'
export type AllowedRole = 'button' | 'link' 
export type AllowedSpaces = AllowedFontSizes & 'none'
export type AllowedTextOverflow = 'ellipsis'
export type AllowedTags = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'a' | 'span' 
export type AllowedWhiteSpace = 'nowrap'
export type FontWeight = 'bold' | 'normal'
export type TextAlignPosition = 'center' | 'left' | 'right'
export type TextDecoration = 'none' | 'underline'

export interface ThemeAttributes {
  colors: Record<AllowedColors, string>
  fonts: AllowedFonts[]
  fontSizes: Record<AllowedFontSizes, string>
  radius: Record<AllowedRadius, string>
  space: Record<AllowedSpaces, string>
}
