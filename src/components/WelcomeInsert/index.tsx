import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import Illustration from '@assets/images/welcome.png'

import { ImageContainer, Section, Text, Title } from './index.styles'

const WelcomeInsert:VFC = (): ReactElement => (
  <Section>
    <div>
      <Title>
        Bienvenue sur <span>MyCanal++</span>
      </Title>
      <Text>
        Sur cette application, vous pourrez consulter
        films et séries comme bon vous semble.
        L'appli est également utilisable sur mobile.
      </Text>
      <Text>
        Bonne visite 🙂
      </Text>
    </div>
    <ImageContainer>
      <Image src={Illustration} role="img" width={300} height={300} />
    </ImageContainer>
  </Section>
)

export default WelcomeInsert
