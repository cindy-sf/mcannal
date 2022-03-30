import { render, screen } from '@testing-library/react'

import { listStub } from '@src/__mocks__/stubs/movies/list'

import DiscoverSection from '..'

describe('DiscoverSection', () => {
  describe('render', () => {
    it('should render the discover section correctly', () => {
      // GIVEN
      render(
        <DiscoverSection
          popular={listStub.results}
          topRated={listStub.results}
          upcoming={listStub.results}
        />
      )

      // THEN
      expect(screen.getByText('À ne pas manquer', { exact: true })).toBeInTheDocument()
      expect(screen.getByText('Nouveautés', { exact: true })).toBeInTheDocument()
      expect(screen.getByText('Les mieux notés', { exact: true })).toBeInTheDocument()
    })
  })
})

