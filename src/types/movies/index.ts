export interface DiscoverMoviesApiResponse {
  page: number
  results: Movies[]
  total_pages: number
  total_results: number
}

export interface Genre {
  id: number
  name:  string
}

export interface MovieDetails {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null | object
  budget: number
  genres: Genre[]
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: ProductionConpanies[]
  production_countries: ProductionContries[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: SpokenLanguages[]
  status: MovieStatus
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Movies {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'

interface ProductionConpanies {
  name: string
  id: number
  logo_path: string | null
  origin_country: string
}

interface ProductionContries {
  iso_3166_1: string
  name: string
}

interface SpokenLanguages {
  iso_639_1: string
  name: string
}
