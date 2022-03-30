import { render, screen } from '@testing-library/react'

import { filteredMultiSearchStub } from '@src/__mocks__/stubs/common'

import type { MultiSearchMovies } from '@src/types/common'

import SearchResult from '..'

describe('SearchResult', () => {
  it('should render the component correctly with the query text and multi search cards', () => {
    // GIVEN
    render(
      <SearchResult
        query="toto"
        multiSearchInfos={filteredMultiSearchStub}
      />
    )

    // THEN
    expect(screen.getByText('Résulat(s) pour la recherche "toto"', { exact: true })).toBeInTheDocument()
    expect(screen.getByText((filteredMultiSearchStub[0] as MultiSearchMovies).title, { exact: true })).toBeInTheDocument()
  })
})
