import React from 'react'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import userEvent from '@testing-library/user-event'

import Skeleton from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe.skip('Skeleton', () => {
  describe('render', () => {
    it("should render correctly the Skeleton with the brand title", () => {
      // GIVEN
      render(<Skeleton />)

      // THEN
      expect(screen.getByAltText('MyCanal ++')).toBeInTheDocument()
      expect(screen.getByText('MyCanal ++')).toBeInTheDocument()
    })
  })
})
