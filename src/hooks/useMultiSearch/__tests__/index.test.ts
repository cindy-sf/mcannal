import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'jest-fetch-mock'

import { filteredMultiSearchStub, multiSearchStub } from '@src/__mocks__/stubs/common'

import { useMultiSearch } from '..'

describe('useMultiSearch', () => {
  beforeEach(() => {
    fetchMock.enableMocks()
    fetchMock.doMock()
    fetchMock.mockResponse(JSON.stringify(multiSearchStub))
  })
  afterEach(() => {
    fetchMock.mockClear()
    jest.clearAllMocks()
  })

  it('should retrieve only movies and tv shows', async () => {
    // GIVEN
    const { result, waitForNextUpdate } = renderHook(() => useMultiSearch(1, 'toto'))

    // THEN
    await waitForNextUpdate()
    expect(result.current).toEqual({
      infos: filteredMultiSearchStub,
      hasFetched: true,
    })
  })

  it('should do nothing without a query', async () => {
    // GIVEN
    const { result } = renderHook(() => useMultiSearch(1))

    // THEN
    expect(result.current).toEqual({
      hasFetched: false,
      infos: undefined,
    })
  })
})
