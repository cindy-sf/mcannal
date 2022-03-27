import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'

import { listStub } from '@src/stubs/movies/list' 

import MovieCard from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('MovieCard', () => {
  const movie = listStub.results[0]

  describe('render', () => {
    it("should the movie card correctly with title and poster", () => {
      // GIVEN
      render(<MovieCard movie={movie} />)

      // THEN
      expect(screen.getByText(movie.title)).toBeInTheDocument()
      expect(screen.getByTestId(`${movie.title}-poster`)).toBeInTheDocument()
    })
  })

  it("should redirect to movie detail page by clicking on the card", () => {
    // GIVEN
    const push = jest.fn()
      useRouter.mockImplementation(() => ({
      push,
    }))

    render(<MovieCard movie={movie} />)

    // WHEN
    userEvent.click(screen.getByText(movie.title))

    // THEN
    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith({
      pathname: '/movie/details/[id]',
      query: { id: movie.id },
    })
  })
})
