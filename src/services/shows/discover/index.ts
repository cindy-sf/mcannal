import { DISCOVER_SHOWS_BASE_PATH } from '@src/services/constants'

import type { DiscoverShowsApiResponse } from '@src/types/shows'

export type RequestType = 'upcoming' | 'topRated' | 'popular'

export const getTrendings = async (
  requestType: RequestType
): Promise<DiscoverShowsApiResponse> => {
  let url = `${DISCOVER_SHOWS_BASE_PATH}&limit=10`

  switch (requestType) {
    case 'upcoming':
      url = url.concat('&sort_by=first_air_date.desc')
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
