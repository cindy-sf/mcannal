import React, { ReactElement, VFC } from 'react'
import Image, { StaticImageData } from 'next/image'

import Button from '@components/Button'

import { ImageWrapper, Screen, Title } from './index.styles'

interface Props {
  title: string
  illustration: StaticImageData
  cta: {
    onClick: () => void
    title: string
  }
}

const SearchEmpty:VFC<Props> = ({ cta, illustration, title }): ReactElement => (
  <Screen>
    <Title>
      {title}
    </Title>
    <ImageWrapper>
      <Image
        src={illustration}
        width={400}
        height={350}
        layout="fixed"
      />
    </ImageWrapper>
    <Button
      title={cta.title}
      onClick={cta.onClick}
    />
  </Screen>
)

export default SearchEmpty
