import React, { ReactElement, FC } from 'react'

import Logo from '@components/Logo'

import { StickyBarWrapper } from './index.styles'

interface Props {
  withTransparentBg?: boolean
}

const StickyBar: FC<Props> = ({
  children,
  withTransparentBg = false,
}): ReactElement => {
  return (
    <StickyBarWrapper withTransparentBg={withTransparentBg}>
      <Logo />
      {children && children}
    </StickyBarWrapper>
  )
}

export default StickyBar
