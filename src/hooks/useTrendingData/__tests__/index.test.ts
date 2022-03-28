import { waitFor } from '@testing-library/dom'
import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'jest-fetch-mock'

import * as getTrendingsMovies from '@src/services/movies/discover'
import * as getTrendingsShows from '@src/services/shows/discover'

import { listStub as moviesListStub } from '@src/__mocks__/stubs/movies/list'
import { listStub as showsListStub } from '@src/__mocks__/stubs/shows/list'

import { useTrendingData } from '..'

describe('useTrendingData', () => {
  beforeEach(() => {
    fetchMock.enableMocks()
    fetchMock.doMock()
  })
  afterEach(fetchMock.mockClear)

  describe('movies', () => {
    it('should fetch trending movies when the discover type is movies', async () => {
      // GIVEN
      fetchMock.mockResponse(JSON.stringify(moviesListStub))
      const { result, waitForNextUpdate } = renderHook(() => useTrendingData('movies'))
  
      // THEN
      await waitForNextUpdate()
      expect(result.current).toEqual({
        trendingMovies: {
          popular: moviesListStub.results,
          topRated: moviesListStub.results,
          upcoming: moviesListStub.results,
        },
        trendingShows: undefined,
      })
    })

    it('should not fetch trending movies if the data has already been fetched', async () => {
      // GIVEN
      jest.spyOn(getTrendingsMovies, 'default')
      const { waitForNextUpdate } =renderHook(() => useTrendingData('movies'))

      // THEN
      await waitForNextUpdate()
      expect(getTrendingsMovies.default).not.toHaveBeenCalled()
    })
  })
  
  describe('shows', () => {
    it('should fetch trending shows when the discover type is shows', async () => {
      // GIVEN
      fetchMock.mockResponse(JSON.stringify(showsListStub))
      const { result, waitForNextUpdate } = renderHook(() => useTrendingData('tvShows'))
  
      // THEN
      await waitForNextUpdate()
      expect(result.current).toEqual({
        trendingMovies: undefined,
        trendingShows: {
          popular: showsListStub.results,
          topRated: showsListStub.results,
          upcoming: showsListStub.results,
        },
      })
    })

    it('should not fetch trending shows if the data has already been fetched', async () => {
      // GIVEN
      jest.spyOn(getTrendingsShows, 'default')
      const { waitForNextUpdate } = renderHook(() => useTrendingData('tvShows'))

      // THEN
      waitForNextUpdate()
      expect(getTrendingsShows.default).not.toHaveBeenCalled()
    })
  })
})
