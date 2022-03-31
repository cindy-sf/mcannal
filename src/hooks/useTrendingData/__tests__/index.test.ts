import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'jest-fetch-mock'

import * as getTrendingsMovies from '@src/services/movies/discover'
import * as getTrendingsShows from '@src/services/shows/discover'

import { listStub as moviesListStub } from '@src/__mocks__/stubs/movies/list'
import { listStub as showsListStub } from '@src/__mocks__/stubs/shows/list'

import { TrendingDataInfos, useTrendingData } from '..'

describe('useTrendingData', () => {
  beforeEach(() => {
    fetchMock.enableMocks()
    fetchMock.doMock()
  })
  afterEach(jest.clearAllMocks)

  describe('movies', () => {
    beforeEach(() => {
      fetchMock.mockResponse(JSON.stringify(moviesListStub))
    })

    it('should fetch trending movies when the discover type is movies', async () => {
      // GIVEN
      const { result, waitForNextUpdate } = renderHook(() =>
        useTrendingData('movies')
      )

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
      // mock the intialState for getting the movies on first render
      const realUseState = React.useState
      jest.spyOn(getTrendingsMovies, 'default')
      jest.spyOn(React, 'useState').mockImplementationOnce(
        () =>
          realUseState<TrendingDataInfos>({
            trendingShows: undefined,
            trendingMovies: {
              popular: moviesListStub.results,
              topRated: moviesListStub.results,
              upcoming: moviesListStub.results,
            },
          }) as any
      )
      renderHook(() => useTrendingData('movies'))

      // THEN
      expect(getTrendingsMovies.default).not.toHaveBeenCalled()
    })
  })

  describe('shows', () => {
    beforeEach(() => {
      fetchMock.mockResponse(JSON.stringify(showsListStub))
    })

    it('should fetch trending shows when the discover type is shows', async () => {
      // GIVEN
      const { result, waitForNextUpdate } = renderHook(() =>
        useTrendingData('tvShows')
      )

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
      // mock the intialState for getting the shows on first render
      const realUseState = React.useState
      jest.spyOn(getTrendingsShows, 'default')
      jest.spyOn(React, 'useState').mockImplementationOnce(
        () =>
          realUseState<TrendingDataInfos>({
            trendingMovies: undefined,
            trendingShows: {
              popular: showsListStub.results,
              topRated: showsListStub.results,
              upcoming: showsListStub.results,
            },
          }) as any
      )
      renderHook(() => useTrendingData('tvShows'))

      // THEN
      expect(getTrendingsShows.default).not.toHaveBeenCalled()
    })
  })
})
