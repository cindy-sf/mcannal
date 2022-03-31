import { waitFor } from '@testing-library/dom'

import { LANGUAGE, MOVIE_BASE_PATH } from '@src/services/constants'  
import { MOVIE_DB_API_KEY } from '../../../../../credential'

import { getCredits, getDetails } from '..'

describe('details', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock
  afterEach(jest.clearAllMocks)

  describe('getDetails', () => {
    it('should collect movie details with the correct url', async () => {
      // GIVEN
      getDetails(12345)

      // THEN
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(`${MOVIE_BASE_PATH}/12345?api_key=${MOVIE_DB_API_KEY}&language=${LANGUAGE}`)
      })
    })
  })

  describe('getCredits', () => {
    it('should collect trending movie credits with the correct url', async () => {
      // GIVEN
      getCredits(12345)

      // THEN
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(`${MOVIE_BASE_PATH}/12345/credits?api_key=${MOVIE_DB_API_KEY}&language=${LANGUAGE}`)
      })
    })
  })
})
  