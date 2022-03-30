import React, { ReactElement, VFC } from 'react'

import { MultiSearchMovies, MultiSearchShows } from '@src/types/common'

import MultiSearchCard from '@components/MultiSearchCard'

import {
  Section,
  Text,
  MovieCardWrapper
} from './index.styles'

interface Prop {
  query: string
  multiSearchInfos: (MultiSearchMovies | MultiSearchShows)[]
}

const SearchResult:VFC<Prop> = ({ multiSearchInfos, query }): ReactElement => (
  <Section>
    <Text>Résulat(s) pour la recherche "{query}"</Text>
    <MovieCardWrapper>
      {multiSearchInfos.map(info => (
        <MultiSearchCard key={info.id} data={info} />
      ))}
    </MovieCardWrapper>
  </Section>
)

export default SearchResult
