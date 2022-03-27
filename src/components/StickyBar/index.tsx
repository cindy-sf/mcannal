import React, { ReactElement, FC } from 'react'

import Logo from '@components/Logo'

import { StickyBarWrapper } from './index.styles'

const StickyBar:FC = ({ children }): ReactElement => {
  return (
    <StickyBarWrapper>
      <Logo />
      {children && children}
    </StickyBarWrapper>
  )
}

export default StickyBar
