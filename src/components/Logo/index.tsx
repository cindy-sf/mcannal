import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Text from '@components/Text'

import LogoIllustration from '@assets/logo.svg'

import { LogoWrapper } from './index.styles'

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
        cursor="pointer"
        role="link"
        title="Canal++"
        ml="small"
        as="a"
        fontFamily="Poppins Medium"
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
