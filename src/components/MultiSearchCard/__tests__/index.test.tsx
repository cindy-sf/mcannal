import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'

import { filteredMultiSearchStub } from '@src/__mocks__/stubs/common'

import type { MultiSearchMovies, MultiSearchShows } from '@src/types/common'

import MultiSearchCard from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('MultiSearchCard', () => {
  const multiSearchData = filteredMultiSearchStub[0] as MultiSearchMovies

  describe('render', () => {
    it('should the movie card correctly with title and poster', () => {
      // GIVEN
      render(<MultiSearchCard data={multiSearchData} />)

      // THEN
      expect(screen.getByText(multiSearchData.title)).toBeInTheDocument()
      expect(
        screen.getByTestId(`${multiSearchData.title} --poster`)
      ).toBeInTheDocument()
    })

    it('should display a fallback picture without movie poster', () => {
      // GIVEN
      render(
        <MultiSearchCard data={{ ...multiSearchData, poster_path: null }} />
      )

      // THEN
      expect(screen.getByText(multiSearchData.title)).toBeInTheDocument()
      expect(
        screen.getByTestId(`${multiSearchData.title} --poster-fallback`)
      ).toBeInTheDocument()
    })

    it('should display the good title for tv show', () => {
      // GIVEN
      const multiSearchDataShow = filteredMultiSearchStub[1] as MultiSearchShows
      render(<MultiSearchCard data={multiSearchDataShow} />)

      // THEN
      expect(screen.getByText(multiSearchDataShow.name)).toBeInTheDocument()
    })

    it('should display the fallback title without overview', () => {
      // GIVEN
      render(
        <MultiSearchCard
          data={{
            ...multiSearchData,
            overview: '',
          }}
        />
      )

      // THEN
      expect(
        screen.getByText('Pas de description pour ce média...', { exact: true })
      ).toBeInTheDocument()
    })
  })

  describe('card redirection', () => {
    const mockedUseRouter = useRouter as jest.Mock

    it('should redirect to movie detail page by clicking on the card by default', () => {
      // GIVEN
      const push = jest.fn()
      mockedUseRouter.mockImplementation(() => ({
        push,
      }))
      render(<MultiSearchCard data={multiSearchData} />)

      // WHEN
      userEvent.click(screen.getByText(multiSearchData.title))

      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith({
        pathname: '/movie/details/[id]',
        query: { id: multiSearchData.id },
      })
    })

    it('should redirect to no more time page by clicking on a tv show card', () => {
      // GIVEN
      const push = jest.fn()
      mockedUseRouter.mockImplementation(() => ({
        push,
      }))
      render(
        <MultiSearchCard
          data={filteredMultiSearchStub[0] as MultiSearchShows}
        />
      )

      // WHEN
      userEvent.click(screen.getByText(multiSearchData.title))

      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith({
        pathname: '/movie/details/[id]',
        query: { id: multiSearchData.id },
      })
    })
  })
})
