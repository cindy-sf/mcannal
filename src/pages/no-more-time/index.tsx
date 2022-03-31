import React, { ReactElement, VFC } from 'react'
import { useRouter } from 'next/router'

import Illustration from '@assets/images/no-more-time.png'

import InfoScreen from '@components/InfoScreen'
import Layout from '@components/Layout'
import StickyBar from '@components/StickyBar'

const NoMoreTime:VFC = (): ReactElement => {
  const router = useRouter()
  
  return (
    <Layout pageTitle="">
      <StickyBar />
      <InfoScreen
        cta={{
          onClick: (): Promise<boolean> => router.push('/'),
          title: 'Retourner à l’accueil',
        }}
        illustration={Illustration}
        title="Désolé, je n’ai pas eu le temps pour développer cette page 😓"
        titleMaxWidth="45rem"
      />
    </Layout>
  )
}

export default NoMoreTime
