import { ThemeAttributes } from '@src/types/theme'
import styled from 'styled-components'

import type { Color, Size, Variant } from './index'

export const BadgeContainer = styled.div<{ variant: Variant, color?: Color, size?: Size }>`
  background-color: ${({ color }) =>  color === 'purple' ? '#0D10FF' : '#000'};
  border-radius: ${({ theme }) => theme.radius.medium};
  color: ${({ theme }) =>  theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-right: ${({ theme }) => theme.space.xSmall};
  margin-bottom: ${({ theme }) => theme.space.xSmall};
  min-width: 12rem;
  padding: 0.6rem 0.8rem;
  text-align: center;

  ${({ variant }) => variant === 'outlined' && `
    color: #000;
    border: 0.1rem solid;
    background-color: #fff;
  `}

  ${({ size }) => size === 'small' && `
    width: 7rem;
    min-width: initial;
    height: 2.5rem;
    padding: initial;
  `}
`
