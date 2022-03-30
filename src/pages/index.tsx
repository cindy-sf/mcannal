import React, { useState } from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Badge from '@components/Badge'
import Layout from '@components/Layout'
import Loader from '@components/Loader'
import StickyBar from '@components/StickyBar'
import TextField from '@components/TextField'
import WelcomeInsert from '@components/WelcomeInsert'

import { useTrendingData } from '@src/hooks/useTrendingData'

import type { DiscoverType } from '@src/types/common'

import { Badges } from './index.styles'

const DiscoverSection = dynamic(
  () => import('@components/DiscoverSection'),
  {
    loading: () => <Loader />,
  },
)

interface BadgeConfig {
  title: 'Films' | 'Séries'
  type: DiscoverType
}

const badConfig: BadgeConfig[] = [
  { title: 'Films', type: 'movies' },
  { title: 'Séries', type: 'tvShows' },
]

const Home: NextPage = () => {
  const [discoverType, setDiscoverType] = useState<DiscoverType>('movies')
  const { trendingMovies, trendingShows } = useTrendingData(discoverType)

  return (
    <Layout pageTitle="Accueil">
      <StickyBar>
        <TextField />
      </StickyBar>
      <WelcomeInsert />
      <Badges>
        {badConfig.map(({ title, type }) => (
          <Badge
            key={title}
            title={title}
            color={discoverType === type ? 'purple' : 'black'}
            variant={discoverType === type ? 'contained' : 'outlined'}
            onClick={():void => setDiscoverType(type)}
          />
        ))}
      </Badges>
      {discoverType === 'movies' && trendingMovies && (
        <DiscoverSection
          popular={trendingMovies.popular}
          topRated={trendingMovies.topRated}
          upcoming={trendingMovies.upcoming}
        />
      )}
      {discoverType === 'tvShows' && trendingShows && (
        <DiscoverSection
          popular={trendingShows.popular}
          topRated={trendingShows.topRated}
          upcoming={trendingShows.upcoming}
        />
      )}
    </Layout>
  )
}

export default Home
