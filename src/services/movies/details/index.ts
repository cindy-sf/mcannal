import { LANGUAGE, MOVIE_BASE_PATH } from '@src/services/constants'
import { MOVIE_DB_API_KEY } from '../../../../credential'

import type {
  Credits,
  MovieDetails,
  MoviesDetailsApiResponseError,
} from '@src/types/movies'

export type RequestType = 'upcoming' | 'topRated' | 'popular'

export const getCredits = async (
  movieId: MovieDetails['id']
): Promise<Credits | MoviesDetailsApiResponseError> => {
  const data = await fetch(
    `${MOVIE_BASE_PATH}/${movieId}/credits?api_key=${MOVIE_DB_API_KEY}&language=${LANGUAGE}`
  )
  return await data.json()
}

export const getDetails = async (
  movieId: MovieDetails['id']
): Promise<MovieDetails | MoviesDetailsApiResponseError> => {
  const data = await fetch(
    `${MOVIE_BASE_PATH}/${movieId}?api_key=${MOVIE_DB_API_KEY}&language=${LANGUAGE}`
  )
  return await data.json()
}

export default getDetails
