import { DISCOVER_MOVIE_BASE_PATH } from '@src/services/constants'

import type { DiscoverMoviesApiResponse } from '@src/types/movies'

export type RequestType = 'upcoming' | 'topRated' | 'popular'

export const getTrendings = async (
  requestType: RequestType
): Promise<DiscoverMoviesApiResponse> => {
  let url = `${DISCOVER_MOVIE_BASE_PATH}&limit=10`

  switch (requestType) {
    case 'upcoming':
      url = url.concat('&sort_by=release_date.desc')
      break

    case 'topRated':
      url = url.concat('&sort_by=vote_count.desc')
      break

    case 'popular':
    default:
      break
  }

  const data = await fetch(url)
  return await data.json()
}

export default getTrendings
