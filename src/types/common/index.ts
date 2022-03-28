import type { Movies } from '@src/types/movies'
import type { TvShows } from '@src/types/shows'

export type DiscoverType = 'movies' | 'tvShows'

export interface TrendingData {
  popular: Movies[] | TvShows[]
  upcoming: Movies[] | TvShows[]
  topRated: Movies[] | TvShows[]
}
