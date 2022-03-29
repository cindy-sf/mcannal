import styled from 'styled-components'

import type { Color, Size, Variant } from './index'

export const BadgeContainer = styled.div<{ variant: Variant, color?: Color, size?: Size }>`
  padding: 0.6rem 0.8rem;
  color: #fff;
  background-color: ${({ color }) =>  color === 'purple' ? '#0D10FF' : '#000'};
  border-radius: 2.6rem;
  min-width: 12rem;
  text-align: center;
  cursor: pointer;
  margin-right: 1.2rem;

  ${({ variant }) => variant === 'outlined' && `
    color: #000;
    border: 0.1rem solid;
    background-color: #fff;
  `}

  ${({ size }) => size === 'small' && `
    width: 7rem;
    min-width: initial;
    padding: initial;
    height: 2.5rem;
  `}
`

export const Text = styled.p`
  font-size: 1.6rem;
`
