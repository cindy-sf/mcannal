import type { ThemeAttributes } from '@src/types/theme'

export const theme: ThemeAttributes = {
  colors: {
    black: '#000000',
    grey : '#F2F2F2',
    purple: '#090DE8',
    white: '#FFFFFF',
  },
  fonts: ['sans-serif', 'Poppins', 'Poppins Regular', 'Poppins Medium', 'Poppins Italic', 'Recoleta'],
  fontSizes: {
    xSmall: '1.2rem',
    small: '1.6rem',
    medium: '1.8rem',
    large: '2.8rem',
    xLarge: '3.2rem',
  },
  radius: {
    small: '1.6rem',
    medium: '2.6rem',
    large: '3.2rem', 
  },
  space: {
    xSmall: '1.2rem',
    small: '1.6rem',
    medium: '2.2rem',
    large: '2.6rem',
    xLarge: '5.2rem', 
    none: '0rem',
  },
}
