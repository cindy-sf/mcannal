import React from 'react'
import { render, screen } from '@testing-library/react'

import Details from '..'

describe('Details', () => {
  describe('render', () => {
    it("should render correctly the Details with his title", () => {
      // GIVEN
      render(<Details />)

      // THEN
      expect(screen.getByText('Detail page')).toBeInTheDocument()
    })
  })
})
