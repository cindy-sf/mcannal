type AllowedColors = 'black' | 'grey' | 'purple' | 'white'
type AllowedFonts = 'Poppins' | 'Poppins Italic' | 'Poppins Medium' | 'Poppins Regular' | 'Recoleta' |'sans-serif' 
type AllowedFontSizes = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'
type AllowedSpaces = AllowedFontSizes & 'none'
type AllowedRaduis = 'small' | 'medium' | 'large'

export interface ThemeAttributes {
  colors: Record<AllowedColors, string>
  fonts: AllowedFonts[]
  fontSizes: Record<AllowedFontSizes, string>
  radius: Record<AllowedRaduis, string>
  space: Record<AllowedSpaces, string>
}
