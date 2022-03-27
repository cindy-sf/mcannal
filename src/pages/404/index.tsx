import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '@components/Layout'
import StickyBar from '@components/StickyBar'
import TextField from '@components/TextField'

import Illustration from '@assets/images/404.png'

import { Button, Container, Title } from './index.styles'

const Custom404 = () => {
  const router = useRouter()

  return (
    <Layout pageTitle="404">
      <StickyBar>
        <TextField />
      </StickyBar>
      <Container>
        <Title>Il semblerait que cette page n’éxiste pas...</Title>
        <Image
          src={Illustration}
          width={370}
          height={370}
          alt="Page introuvable"
          role="img"
        />
        <Button
          onClick={(): void => {
            router.push({
              pathname: '/',
            })
          }}
          title="Accueil"
        >
          Accueil
        </Button>
      </Container>
    </Layout>
  )
}

export default Custom404
 