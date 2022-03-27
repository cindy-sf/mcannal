import { MOVIE_DB_API_KEY } from '../../credential'

const LANGUAGE='fr'
const API_VERSION='3'

export const MOVIE_DB_BASE_POSTER_PATH = 'https://image.tmdb.org/t/p/w300'
export const MOVIE_DB_BASE_PATH=`https://api.themoviedb.org/${API_VERSION}`
export const DISCOVER_MOVIE_BASE_PATH=`${MOVIE_DB_BASE_PATH}/discover/movie?language=${LANGUAGE}&api_key=${MOVIE_DB_API_KEY}`
