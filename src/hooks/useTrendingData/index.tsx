import { useEffect, useState } from 'react'

import { getTrendings as getTrendingsMovies } from '@src/services/movies/discover'
import { getTrendings as getTrendingsShows } from '@src/services/shows/discover'

import type { DiscoverType, TrendingData } from '@src/types/common'

type TrendingDataInfos = {
  trendingMovies?: TrendingData,
  trendingShows?: TrendingData
}

export const useTrendingData = (discoverType: DiscoverType): TrendingDataInfos => {
  const [trendingMovies, setTrendingMovies] = useState<TrendingData>()
  const [trendingShows, setTrendingShows] = useState<TrendingData>()
  
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
          return
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

  return {
    trendingMovies,
    trendingShows,
  }
}

export default useTrendingData
