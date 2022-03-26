import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import LogoIllustration from '@assets/logo.svg'

import { LogoWrapper, Text } from './index.styles'

const Logo:VFC = (): ReactElement => {
  return (
    <LogoWrapper>
      <Image
        src={LogoIllustration}
        width={52}
        height={52}  
        alt="MyCanal ++"
      />
      <Text>MyCanal ++</Text>
    </LogoWrapper>
  )
}

export default Logo
