import React, { FC, ReactElement } from 'react'
import Head from 'next/head'

import { Main } from './index.styles'

interface Props {
  pageTitle: string
}

const Layout:FC<Props> = ({ children, pageTitle }): ReactElement => {
  return (
    <>
      <Head>
        <title>MyCanal ++ | {pageTitle}</title>
      </Head>
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout
