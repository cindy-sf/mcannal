import React, { ReactElement, VFC } from 'react'
import Image, { StaticImageData } from 'next/image'

import Button from '@components/Button'
import Text from '@components/Text'

import { ImageWrapper, ScreenContainer } from './index.styles'

interface Props {
  title: string
  titleMaxWidth?: string
  illustration: StaticImageData
  cta: {
    onClick: () => void
    title: string
  }
}

const InfoScreen:VFC<Props> = ({ cta, illustration, title, titleMaxWidth }): ReactElement => (
  <ScreenContainer>
    <Text
      as="h2"
      textAlign="center"
      marginBottom="xLarge"
      size="xLarge"
      maxWidth={titleMaxWidth}
    >
      {title}
    </Text>
    <ImageWrapper>
      <Image
        src={illustration}
        width={400}
        height={350}
        layout="fixed"
        alt={title}
      />
    </ImageWrapper>
    <Button
      title={cta.title}
      onClick={cta.onClick}
    />
  </ScreenContainer>
)

export default InfoScreen
