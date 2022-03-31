import { render, screen } from '@testing-library/react'

import { creditsStub, detailsStub } from '@src/__mocks__/stubs/movies/details'

import DetailsInfos from '..' 

describe('Name ofDetailsInfos', () => {
  const defaultProps = {
    movie: detailsStub,
    credits: creditsStub,
  }

  describe('render', () => {
    it('should render the component correctly movie details informations', () => {
      // GIVEN
      render(<DetailsInfos {...defaultProps} />) 

      // THEN
      // Check if title, picture, formatted date, runtime, language, overview and badges are presents
      expect(screen.getByText(defaultProps.movie.title, { exact: true })).toBeInTheDocument()
      expect(screen.getByText(/23\/09\/2014 • 2h30 • fr/)).toBeInTheDocument()
      expect(screen.getByTitle('Joaquin Phoenix | Theodore Twombly', { exact: true })).toBeInTheDocument()
      expect(screen.getByText(defaultProps.movie.genres![0].name, { exact: true })).toBeInTheDocument()
    })

    it('should display "Iconnue" for movie duration without runtime', () => {
      // GIVEN
      render(
        <DetailsInfos
          {...defaultProps}
          movie={{...defaultProps.movie, runtime: null }}
        />
      ) 

      // THEN
      expect(screen.getByText(/Inconnue/)).toBeInTheDocument()
    })

    it('should display a specific phrase without overview in movie details', () => {
      // GIVEN
      render(
        <DetailsInfos
          {...defaultProps}
          movie={{...defaultProps.movie, overview: null }}
        />
      ) 

      // THEN
      expect(
        screen.getByText('Désolé, nous aucun n’avons pas de résumé pour ce film...', { exact: true })
      ).toBeInTheDocument()
    })

    it('should display a specific phrase without actor in movie credits', () => {
      // GIVEN
      render(
        <DetailsInfos
          {...defaultProps}
          credits={{...defaultProps.credits, cast: [] }}
        />
      ) 

      // THEN
      expect(
        screen.getByText('Désolé, nous aucun n’avons pas trouvé d’acteur pour ce film...', { exact: true })
      ).toBeInTheDocument()
    })
  })
})
