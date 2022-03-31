import React, { FC, ReactElement } from 'react'
import Head from 'next/head'

import Text from '@components/Text'

import { Footer, Main } from './index.styles'

interface Props {
  pageTitle: string
}

const Layout: FC<Props> = ({ children, pageTitle }): ReactElement => {
  return (
    <>
      <Head>
        <title>MyCanal ++ | {pageTitle}</title>
      </Head>
      <Main>{children}</Main>
      <Footer>
        <Text textAlign="center" size="small">
          Made with ❤️ by Cindy Saint Fleurant
        </Text>
      </Footer>
    </>
  )
}

export default Layout
