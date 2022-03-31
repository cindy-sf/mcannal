import { render, screen } from '@testing-library/react'

import Button from '..'

describe('Button', () => {
  describe('render', () => {
    it('should render correctly the Button with his title', () => {
      // GIVEN
      render(<Button title="Test Button title" />)

      // THEN
      expect(screen.getByText('Test Button title')).toBeInTheDocument()
    })
  })
})
