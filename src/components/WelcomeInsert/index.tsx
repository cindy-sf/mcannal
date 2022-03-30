import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import Illustration from '@assets/images/welcome.png'

import Text from '@components/Text'

import { ImageContainer, Section } from './index.styles'

const WelcomeInsert:VFC = (): ReactElement => (
  <Section>
    <div>
      <Text as="h1" size="xLarge">
        Bienvenue sur <Text as="span" color="purple" size="xLarge">MyCanal++</Text>
      </Text>
      <Text size="medium" mt="large" maxWidth="70%">
        Sur cette application, vous pourrez consulter
        films et séries comme bon vous semble.
      </Text>
      <Text size="medium" mt="large">
        Bonne visite 🙂
      </Text>
    </div>
    <ImageContainer>
      <Image
        src={Illustration}
        role="img"
        layout="fixed"
        width={275}
        height={275}
      />
    </ImageContainer>
  </Section>
)

export default WelcomeInsert
