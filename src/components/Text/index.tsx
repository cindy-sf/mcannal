import React, { VFC, ReactElement, ReactNode } from 'react'

import type { ThemeAttributes } from '@src/types/theme'

import { StyledText } from './index.styles'

export interface Props {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'a' | 'span'
  color?: keyof ThemeAttributes['colors']
  colorHover?: keyof ThemeAttributes['colors']
  size?: keyof ThemeAttributes['fontSizes']
  children: ReactNode
  textDecoration?: 'none' | 'underline'
  textAlign?: 'center' | 'left' | 'right'
  mt?: keyof ThemeAttributes['space']
  mr?: keyof ThemeAttributes['space']
  mb?: keyof ThemeAttributes['space']
  ml?: keyof ThemeAttributes['space']
  maxWidth?: string
}

const Text:VFC<Props> = (props): ReactElement => {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  )
}

Text.defaultProps = {
  as: 'p',
  color: 'black',
  size: 'medium',
  textDecoration: 'none',
  textAlign: 'left',
}

export default Text
