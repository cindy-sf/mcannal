import React from 'react'
import { render, screen } from '@testing-library/react'

import Badge from '..'

describe('Badge', () => {
  describe('render', () => {
    it("should render correctly the badge with his title", () => {
      // GIVEN
      render(<Badge title="Test badge title" color="purple" />)

      // THEN
      expect(screen.getByText('Test badge title')).toBeInTheDocument()
    })
  })
})