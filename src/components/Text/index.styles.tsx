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
  text-decoration: ${({ textDecoration }) => textDecoration && textDecoration};
  cursor: ${({ cursor }) => cursor && cursor};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  font-family: ${({ fontFamily }) => fontFamily && `${fontFamily}, sans-serif`};
  white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
  overflow: ${({ overflow }) => overflow && overflow};
  text-overflow: ${({ textOverflow }) => textOverflow && textOverflow};

  ${({ colorHover, theme }) => colorHover && `
      :hover {
        color: ${theme.colors.purple};
      }
  `}
`
