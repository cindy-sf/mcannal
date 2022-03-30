import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import { Block, Section, SkeletonWrapper } from './index.styles'

const Skeleton:VFC = (): ReactElement => (
  <SkeletonWrapper>
    <Block />
    <Section>
      <Block height={32} width={22} />
      <Block height={32} width={22} />
      <Block height={32} width={22} />
      <Block height={32} width={22} />
    </Section>
    <Block />
    <Section>
      <Block height={32} width={22} />
      <Block height={32} width={22} />
      <Block height={32} width={22} />
      <Block height={32} width={22} />
    </Section>
    <Block />
    <Section>
      <Block height={32} width={22} />
      <Block height={32} width={22} />
      <Block height={32} width={22} />
      <Block height={32} width={22} />
    </Section>
  </SkeletonWrapper>
)

export default Skeleton
