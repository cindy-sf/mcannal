import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from '..'

describe('Logo', () => {
  describe('render', () => {
    it("should render correctly the logo with the brand title", () => {
      // GIVEN
      render(<Logo />)

      // THEN
      expect(screen.getByAltText('MyCanal ++')).toBeInTheDocument()
      expect(screen.getByText('MyCanal ++')).toBeInTheDocument()
    })
  })
})
