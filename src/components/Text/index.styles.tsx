import styled from 'styled-components'

import type { Props } from './index'

import { theme } from '@styles/theme'

type StyledProps = Partial<Props>

export const StyledText = styled.p<StyledProps>`
  color: ${({ color }) => color && theme.colors[color]};
  font-size: ${({ size }) => size && theme.fontSizes[size]};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  margin-top: ${({ mt }) => mt && theme.space[mt]};
  margin-right: ${({ mr }) => mr && theme.space[mr]};
  margin-bottom: ${({ mb }) => mb && theme.space[mb]};
  margin-left: ${({ ml }) => ml && theme.space[ml]};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
`
