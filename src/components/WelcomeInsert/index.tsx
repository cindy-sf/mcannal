import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import Illustration from '@assets/images/welcome.png'

import { Section, Text, TextContainer, Title } from './index.styles'

const WelcomeInsert:VFC = (): ReactElement => (
  <Section>
    <TextContainer>
      <Title>
        Bienvenue sur <span>MyCanal++</span>
      </Title>
      <Text>
        Sur cette application, vous pourrez consulter
        films et séries comme bon vous semble. 
      </Text>
      <Text>
        Bonne visite 🙂
      </Text>
    </TextContainer>
    <div>
      <Image src={Illustration} role="img" width={350} height={400} />
    </div>
  </Section>
)

export default WelcomeInsert
