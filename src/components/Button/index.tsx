import React, { VFC } from 'react'

import { StyledButton } from './index.styles'

export type Variant = 'contained' | 'outlined'
export type Color = 'purple' | 'black'

interface Props {
  title: string
  onClick?: () => void
}

const Button:VFC<Props> = ({ title, onClick }) => (
  <StyledButton
    onClick={onClick}
    role="button"
  >
    <p>{title}</p>
  </StyledButton>
)

export default Button
