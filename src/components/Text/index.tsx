import React, { VFC, ReactElement, ReactNode } from 'react'

import type { AllowedColors, AllowedCursor, AllowedFonts, AllowedFontSizes, AllowedOverflow, AllowedRole, AllowedSpaces, AllowedTags, AllowedTextOverflow, AllowedWhiteSpace, FontWeight, TextAlignPosition, TextDecoration, ThemeAttributes } from '@src/types/theme'

import { StyledText } from './index.styles'

export interface Props {
  as?: AllowedTags
  color?: AllowedColors
  colorHover?: AllowedColors
  size?: AllowedFontSizes
  children: ReactNode | string[] | string
  textDecoration?: TextDecoration
  textAlign?: TextAlignPosition
  mt?: AllowedSpaces
  mr?: AllowedSpaces
  mb?: AllowedSpaces
  ml?: AllowedSpaces
  maxWidth?: string
  onClick?: () => void
  cursor?: AllowedCursor
  role?: AllowedRole
  title?: string
  fontWeight?: FontWeight
  fontFamily?: AllowedFonts
  whiteSpace?: AllowedWhiteSpace
  overflow?: AllowedOverflow
  textOverflow?: AllowedTextOverflow
}

const Text:VFC<Props> = (props): ReactElement => (
  <StyledText {...props}>
    {props.children}
  </StyledText>
)

Text.defaultProps = {
  as: 'p',
  cursor: 'auto',
  color: 'black',
  size: 'medium',
  textDecoration: 'none',
  textAlign: 'left',
}

export default Text
