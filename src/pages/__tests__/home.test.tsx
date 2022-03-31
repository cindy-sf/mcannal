import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fetchMock from 'jest-fetch-mock'

import * as useTrendingData from '@src/hooks/useTrendingData'

import { listStub as moviesListStub } from '@src/__mocks__/stubs/movies/list'
import { listStub as showsListStub } from '@src/__mocks__/stubs/shows/list'

import Home from '..' 

describe('Home', () => {
  beforeEach(() => {
    fetchMock.enableMocks()
    fetchMock.doMock()
  })
  afterEach(jest.clearAllMocks)

  describe('render', () => {
    describe('with data', () => {
      jest.spyOn(useTrendingData, 'default').mockReturnValue({
        trendingMovies: {
          popular: moviesListStub.results,
          topRated: moviesListStub.results,
          upcoming: moviesListStub.results,
        },
        trendingShows: {
          popular: showsListStub.results,
          topRated: showsListStub.results,
          upcoming: showsListStub.results,
        },
      })

      it('should render the page correctly with movies', async () => {
        // GIVEN
        fetchMock.mockResponse(JSON.stringify(moviesListStub))
        render(<Home />)

        // THEN
        expect(await screen.findByText('À ne pas manquer')).toBeInTheDocument()
        expect(screen.getByText('Nouveautés')).toBeInTheDocument()
        expect(screen.getByText('Les mieux notés')).toBeInTheDocument()
        expect(screen.getByText(/Voici les fonctionnalités disponibles/)).toBeInTheDocument()
      })

      it('should render the the tvShows section correctly by clicking on "Series" badge', async () => {
        // GIVEN
        fetchMock.mockResponseOnce(JSON.stringify(moviesListStub))
        fetchMock.mockResponse(JSON.stringify(showsListStub))
        render(<Home />)

        // WHEN
        userEvent.click(screen.getByRole('button', { name: 'Séries' }))

        // THEN
        expect(await screen.findByText('À ne pas manquer')).toBeInTheDocument()
        expect(screen.getByText('Nouveautés')).toBeInTheDocument()
        expect(screen.getByText('Les mieux notés')).toBeInTheDocument()
      })
    })
  })
})
