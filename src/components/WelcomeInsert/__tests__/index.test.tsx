import { render, screen } from '@testing-library/react'

import WelcomeInsert from '..'

describe('Welcome insert', () => {
  describe('render', () => {
    it('should render the insert correctly with his description', () => {
      // GIVEN
      render(<WelcomeInsert />)

      // THEN
      expect(screen.getByText(/Bienvenue/)).toBeInTheDocument()
      expect(screen.getByText(/Voici les fonctionnalités disponibles/)).toBeInTheDocument()
      expect(screen.getByText(/Bonne visite/)).toBeInTheDocument()
      expect(screen.getByRole("img")).toBeInTheDocument()
    })
  })
})
