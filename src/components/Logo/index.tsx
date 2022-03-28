import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import LogoIllustration from '@assets/logo.svg'

import { LogoWrapper, Text } from './index.styles'

const Logo:VFC = (): ReactElement => {
  const router = useRouter()

  return (
    <LogoWrapper>
      <Image
        src={LogoIllustration}
        width={36}
        height={36}  
        alt="MyCanal ++"
      />
      <Text
        role="link"
        title="Canal++"
        onClick={(): void => {
          router.push({
            pathname: '/',
          })
        }}
      >
        MyCanal ++
      </Text>
    </LogoWrapper>
  )
}

export default Logo
