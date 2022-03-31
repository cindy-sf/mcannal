import { render, screen } from '@testing-library/react'

import Loader from '..'

describe('Loader', () => {
  describe('render', () => {
    it('should render the loading text', () => {
      // GIVEN
      render(<Loader />)

      // THEN
      expect(screen.getByText('Chargement...')).toBeInTheDocument()
    })
  })
})
