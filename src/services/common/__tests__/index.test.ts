import { waitFor } from '@testing-library/dom'

import { MULTI_SEARCH_BASE_PATH } from '@src/services/constants'

import { getDataByMultiSearch } from '..'

describe('getDataByMultiSearch', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  it('should collect multi search data with the correct url', async () => {
      // GIVEN
      getDataByMultiSearch('grave', 1)

      // THEN
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(`${MULTI_SEARCH_BASE_PATH}&query=grave&page=1`)
      })
    }
  )
})
  