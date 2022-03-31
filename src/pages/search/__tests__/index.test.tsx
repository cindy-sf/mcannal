import { render, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import userEvent from '@testing-library/user-event'

import * as useMultiSearch from '@src/hooks/useMultiSearch'

import { multiSearchWithoutPeopleStub } from '@src/__mocks__/stubs/common'

import type { MultiSearchMovies } from '@src/types/common'

import Search from '..'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    }
  },
}))
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Search', () => {
  afterEach(jest.clearAllMocks)

  describe('render', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(),
      })
    ) as jest.Mock

    describe('without query', () => {
      it('should render page correctly without query', async () => {
        // GIVEN
        useRouter.mockImplementation(() => ({
          route: '/',
          query: {
            q: '',
          },
          isReady: true,
        }))
        render(<Search />)

        // THEN
        expect(
          await screen.findByText('Effectuer une recherche', { exact: true })
        ).toBeInTheDocument()
      })

      it('should focus the input by clicking on "Rechercher" button', async () => {
        // GIVEN
        useRouter.mockImplementation(() => ({
          route: '/',
          query: {
            q: '',
          },
          isReady: true,
        }))

        render(<Search />)

        // WHEN
        userEvent.click(
          await screen.findByRole('button', { name: 'Rechercher' })
        )

        // THEN
        expect(screen.getByPlaceholderText('Rechercher...')).toHaveFocus()
      })
    })

    describe('without data', () => {
      beforeEach(() => {
        useRouter.mockImplementation(() => ({
          route: '/',
          query: {
            q: 'Saint laurent',
          },
          isReady: true,
        }))
      })

      it.skip('should display the loader when data is fetching', async () => {
        // GIVEN
        jest.spyOn(useMultiSearch, 'default').mockReturnValue({
          hasFetched: false,
        })

        render(<Search />)
        await screen.getByDisplayValue('Saint laurent')

        // THEN
        expect(
          screen.getByText('Chargement...', { exact: true })
        ).toBeInTheDocument()
      })

      it('should display search without result when there are no results', async () => {
        // GIVEN
        jest.spyOn(useMultiSearch, 'default').mockReturnValue({
          hasFetched: true,
          infos: [],
        })

        render(<Search />)

        // THEN
        expect(
          await screen.findByText('Aucun resultat pour “ Saint laurent ”', {
            exact: true,
          })
        ).toBeInTheDocument()
      })
    })

    describe('width data', () => {
      beforeEach(() => {
        fetchMock.enableMocks()
        fetchMock.doMock()
        fetchMock.mockResponse(JSON.stringify(multiSearchWithoutPeopleStub))

        jest.spyOn(useMultiSearch, 'default').mockReturnValue({
          hasFetched: true,
          infos: multiSearchWithoutPeopleStub.results,
          totalPage: 10,
        })

        useRouter.mockImplementation(() => ({
          route: '/',
          query: {
            q: ['Saint laurent'],
          },
          isReady: true,
          push: jest.fn(),
        }))
      })
      const movie = multiSearchWithoutPeopleStub.results[0] as MultiSearchMovies

      it('should display search with results on success', async () => {
        // GIVEN
        render(<Search />)

        // THEN
        expect(await screen.findByText(movie.title)).toBeInTheDocument()
        expect(
          screen.getByText('Voir plus', { exact: true })
        ).toBeInTheDocument()
      })

      it('should hide "Voir plus" text link when all data of the pages has been fetched', async () => {
        // GIVEN
        fetchMock.mockResponse(
          JSON.stringify({
            ...multiSearchWithoutPeopleStub,
            page: 1,
          })
        )
        jest.spyOn(useMultiSearch, 'default').mockReturnValue({
          hasFetched: true,
          infos: multiSearchWithoutPeopleStub.results,
          totalPage: 1,
        })
        render(<Search />)

        // THEN
        expect(screen.queryByText('Voir plus')).not.toBeInTheDocument()
      })
    })
  })
})
