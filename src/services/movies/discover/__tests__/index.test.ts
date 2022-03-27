import { waitFor } from '@testing-library/dom'

import { DISCOVER_MOVIE_BASE_PATH } from '@src/services/constants'

import { getTrendings, RequestType } from '..'

describe('getTrendrings', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock
  afterEach(jest.clearAllMocks)

  it.each([
    ['upcoming', `${DISCOVER_MOVIE_BASE_PATH}&limit=10&sort_by=release_date.desc`],
    ['topRated', `${DISCOVER_MOVIE_BASE_PATH}&limit=10&sort_by=vote_count.asc,vote_average.asc`],
    ['popular', `${DISCOVER_MOVIE_BASE_PATH}&limit=10`]
  ])(
    'should collect trending movies with the correct url for "%s" request type',
    async (requestType, expectedUrl) => {
      // GIVEN
      getTrendings(requestType as RequestType)

      // THEN
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(expectedUrl)
      })
    }
  )
})
  