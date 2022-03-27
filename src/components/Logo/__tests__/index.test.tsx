import React from 'react'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import userEvent from '@testing-library/user-event'

import Logo from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Logo', () => {
  describe('render', () => {
    it("should render correctly the logo with the brand title", () => {
      // GIVEN
      render(<Logo />)

      // THEN
      expect(screen.getByAltText('MyCanal ++')).toBeInTheDocument()
      expect(screen.getByText('MyCanal ++')).toBeInTheDocument()
    })

    it("should redirect to home by clicking on brand text link", () => {
      // GIVEN
      const push = jest.fn()
        useRouter.mockImplementation(() => ({
        push,
      }))
      render(<Logo />)

      // WHEN
      userEvent.click(screen.getByTitle('Canal++'))

      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith({ pathname: '/' })
    })
  })
})
