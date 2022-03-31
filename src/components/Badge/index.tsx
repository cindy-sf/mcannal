import React, { ReactElement, VFC } from 'react'

import { BadgeContainer } from './index.styles'

export type Variant = 'contained' | 'outlined'
export type Color = 'purple' | 'black'
export type Size = 'small' | 'normal'

interface Props {
  title: string
  variant?: Variant
  color: Color
  size?: Size
  onClick?: () => void
}

const Badge: VFC<Props> = ({
  title,
  variant = 'contained',
  color,
  onClick,
  size,
}): ReactElement => (
  <BadgeContainer
    variant={variant}
    color={color}
    onClick={onClick}
    role="button"
    size={size}
  >
    {title}
  </BadgeContainer>
)

export default Badge
