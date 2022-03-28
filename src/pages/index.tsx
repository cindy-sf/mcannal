import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Badge from '@components/Badge'
import type { TrendingData } from '@components/DiscoverSection'
import Layout from '@components/Layout'
import Skeleton from '@components/Skeleton'
import StickyBar from '@components/StickyBar'
import TextField from '@components/TextField'
import WelcomeInsert from '@components/WelcomeInsert'

import { getTrendings as getTrendingsMovies } from '@src/services/movies/discover'
import { getTrendings as getTrendingsShows } from '@src/services/shows/discover'

import { Badges } from './index.styles'

const DiscoverSection = dynamic(
  () => import('@components/DiscoverSection'),
  {
    loading: () => <Skeleton />,
  },
)

interface BadgeConfig {
  title: 'Films' | 'Séries'
  type: DiscoverType
}

type DiscoverType = 'movies' | 'tvShows'

const badConfig: BadgeConfig[] = [
  { title: 'Films', type: 'movies' },
  { title: 'Séries', type: 'tvShows' },
]

const Home: NextPage = () => {
  const [trendingMovies, setTrendingMovies] = useState<TrendingData>()
  const [trendingShows, setTrendingShows] = useState<TrendingData>()
  
  const [discoverType, setDiscoverType] = useState<DiscoverType>('movies')

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (discoverType === 'tvShows') {
           // do not fetch again if shows has already been fetched
          if (trendingShows) return

          setTrendingShows({
            popular: (await getTrendingsShows('popular')).results,
            upcoming: (await getTrendingsShows('upcoming')).results,
            topRated: (await getTrendingsShows('topRated')).results,
          })
        }

        // do not fetch again if shows has already been fetched
        if (trendingMovies) return
        setTrendingMovies({
          popular: (await getTrendingsMovies('popular')).results,
          upcoming: (await getTrendingsMovies('upcoming')).results,
          topRated: (await getTrendingsMovies('topRated')).results,
        })
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [discoverType])

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
