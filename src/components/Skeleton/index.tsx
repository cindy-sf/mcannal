import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import { Block, SkeletonWrapper, Text } from './index.styles'

const Skeleton:VFC = (): ReactElement => (
  <SkeletonWrapper>
    <Block />
    <div>
      <Text>
        Chargement...
      </Text>
    </div>
  </SkeletonWrapper>
)

export default Skeleton
