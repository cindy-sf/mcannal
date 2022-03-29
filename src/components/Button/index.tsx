import React, { VFC } from 'react'

import { StyledButton } from './index.styles'

export type Variant = 'contained' | 'outlined'
export type Color = 'purple' | 'black'

interface Props {
  title: string
  onClick?: () => void
  disabled?: boolean
}

const Button:VFC<Props> = ({ disabled = false, title, onClick }) => (
  <StyledButton
    onClick={onClick}
    role="button"
    disabled={disabled}
  >
    <p>{title}</p>
  </StyledButton>
)

export default Button
