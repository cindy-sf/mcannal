import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'

import { listStub as moviesListStub } from '@src/__mocks__/stubs/movies/list' 
import { listStub as tvShowsListStub } from '@src/__mocks__/stubs/shows/list' 

import TrendingCard from '..'
import { TvShows } from '@src/types/shows'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('TrendingCard', () => {
  const movie = moviesListStub.results[0]

  describe('render', () => {
    it("should the movie card correctly with title and poster", () => {
      // GIVEN
      render(<TrendingCard data={movie} />)

      // THEN
      expect(screen.getByText(movie.title)).toBeInTheDocument()
      expect(screen.getByTestId(`${movie.title} --poster`)).toBeInTheDocument()
    })

    it("should display a fallback picture without movie poster", () => {
      // GIVEN
      render(<TrendingCard data={{ ...movie, poster_path: null }} />)

      // THEN
      expect(screen.getByText(movie.title)).toBeInTheDocument()
      expect(screen.getByTestId(`${movie.title} --poster-fallback`)).toBeInTheDocument()
    })

    it("should display the good title for tv show", () => {
      // GIVEN
      const tvShow = tvShowsListStub.results[0]
      render(<TrendingCard data={tvShow} />)

      // THEN
      expect(screen.getByText(tvShow.name)).toBeInTheDocument()
    })
  })

  describe('redirection', () => {
    const mockedUseRouter = useRouter as jest.Mock

    it("should redirect to movie detail page by clicking on the card", () => {
      // GIVEN
      const push = jest.fn()
      mockedUseRouter.mockImplementation(() => ({
        push,
      }))
  
      render(<TrendingCard data={movie} />)
  
      // WHEN
      userEvent.click(screen.getByText(movie.title))
  
      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith({
        pathname: '/movie/details/[id]',
        query: { id: movie.id },
      })
    })

    it("should redirect to no more time page by clicking on a tv show card", () => {
      // GIVEN
      const push = jest.fn()
        mockedUseRouter.mockImplementation(() => ({
        push,
      }))
      const show = tvShowsListStub.results[1]
  
      render(<TrendingCard data={show} />)
  
      // WHEN
      userEvent.click(screen.getByText(show.name))
  
      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith('/no-more-time')
    })
  })
})
