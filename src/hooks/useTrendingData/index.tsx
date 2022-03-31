import { useEffect, useState } from 'react'

import { getTrendings as getTrendingsMovies } from '@src/services/movies/discover'
import { getTrendings as getTrendingsShows } from '@src/services/shows/discover'

import type { DiscoverType, TrendingData } from '@src/types/common'

export type TrendingDataInfos = {
  trendingMovies?: TrendingData
  trendingShows?: TrendingData
}

export const useTrendingData = (
  discoverType: DiscoverType
): TrendingDataInfos => {
  const [trendingDataInfos, setTrendingDataInfos] =
    useState<TrendingDataInfos>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (discoverType === 'tvShows') {
          // do not fetch again if shows has already been fetched
          if (trendingDataInfos?.trendingShows) return
          const [popular, topRated, upcoming] = await Promise.all([
            (await getTrendingsShows('popular')).results,
            (await getTrendingsShows('topRated')).results,
            (await getTrendingsShows('upcoming')).results,
          ])
          setTrendingDataInfos((currentState) => ({
            trendingShows: {
              popular,
              upcoming,
              topRated,
            },
            trendingMovies: currentState?.trendingMovies,
          }))
          return
        }

        // do not fetch again if movies has already been fetched
        if (trendingDataInfos?.trendingMovies) return
        const [popular, topRated, upcoming] = await Promise.all([
          (await getTrendingsMovies('popular')).results,
          (await getTrendingsMovies('topRated')).results,
          (await getTrendingsMovies('upcoming')).results,
        ])
        setTrendingDataInfos((currentState) => ({
          trendingMovies: {
            popular,
            upcoming,
            topRated,
          },
          trendingShows: currentState?.trendingShows,
        }))
      } catch (error) {
        // do nothing
      }
    }

    fetchData()
  }, [discoverType])

  return {
    trendingMovies: trendingDataInfos?.trendingMovies,
    trendingShows: trendingDataInfos?.trendingShows,
  }
}

export default useTrendingData
