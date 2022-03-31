import { waitFor } from '@testing-library/dom'

import { DISCOVER_SHOWS_BASE_PATH } from '@src/services/constants'

import { getTrendings, RequestType } from '..'

describe('getTrendrings', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    })
  ) as jest.Mock
  afterEach(jest.clearAllMocks)

  it.each([
    ['upcoming', `${DISCOVER_SHOWS_BASE_PATH}&limit=10&sort_by=first_air_date.desc`],
    ['topRated', `${DISCOVER_SHOWS_BASE_PATH}&limit=10&sort_by=vote_count.desc`],
    ['popular', `${DISCOVER_SHOWS_BASE_PATH}&limit=10`]
  ])(
    'should collect trending shows with the correct url for "%s" request type',
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
