import type { Movies } from '@src/types/movies'
import type { TvShows } from '@src/types/shows'

export type DiscoverType = 'movies' | 'tvShows'

export interface MultiSearchApiResponse {
  page: number
  results: (MultiSearchMovies | MultiSearchShows | MultiSearchPeople)[]
  total_pages: number
  total_results: number
}

export interface MultiSearchMovies {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  original_title: string
  genre_ids: number[]
  id: number
  media_type: 'movie'
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface MultiSearchShows {
  poster_path: string | null
  popularity: number
  id: number
  overview: string
  backdrop_path: string | null
  vote_average: number
  media_type: 'tv'
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export interface MultiSearchPeople {
  profile_path: string | null
  adult: boolean
  id: number
  media_type: 'person'
  // @todo: type the rest of the response
}

export interface TrendingData {
  popular: Movies[] | TvShows[]
  upcoming: Movies[] | TvShows[]
  topRated: Movies[] | TvShows[]
}
