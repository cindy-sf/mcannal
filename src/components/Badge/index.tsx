import React, { VFC } from 'react'

import { BadgeContainer, Text } from './index.styles'

export type Variant = 'contained' | 'outlined'
export type Color = 'purple' | 'black'

interface Props {
  title: string
  variant?: Variant
  color: Color
  onClick?: () => void
}

const Badge:VFC<Props> = ({ title, variant="contained", color, onClick }) => (
  <BadgeContainer
    variant={variant}
    color={color}
    onClick={onClick}
    role="button"
  >
    <Text>{title}</Text>
  </BadgeContainer>
)

export default Badge
