import React from 'react'
import { useRouter, RouterEvent } from 'next/router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NotFoundPage from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('404', () => {
  describe('render', () => {
    it('should render the page correctly with the title, illustration, and button', () => {
      // GIVEN
      render(<NotFoundPage />)

      // THEN
      expect(screen.getByText('Il semblerait que cette page n’éxiste pas...')).toBeInTheDocument()
      expect(screen.getByAltText('Page introuvable')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Accueil' })).toBeInTheDocument()
    })
  })

  it('should do a redirection to the home page by clicking on "accueil" button', () => {
    // GIVEN
    const routerPush = jest.fn()
    useRouter.mockImplementation(() => ({
      push: routerPush,
    }))
    render(<NotFoundPage />)

    // WHEN
    userEvent.click(screen.getByRole('button', { name: 'Accueil' }))

    // THEN
    expect(routerPush).toHaveBeenCalledTimes(1)
    expect(routerPush).toHaveBeenCalledWith({ pathname: '/' })
  })
})
