import React, { ReactElement, VFC } from 'react'

import { MultiSearchMovies, MultiSearchShows } from '@src/types/common'

import Text from '@components/Text'
import MultiSearchCard from '@components/MultiSearchCard'

import { Section, MultiSearchCardContainer } from './index.styles'

interface Prop {
  query: string
  multiSearchInfos: (MultiSearchMovies | MultiSearchShows)[]
}

const SearchResult:VFC<Prop> = ({ multiSearchInfos, query }): ReactElement => (
  <Section>
    <Text fontFamily="Poppins Italic" marginBottom="large">Résulat(s) pour la recherche "{query}"</Text>
    <MultiSearchCardContainer>
      {multiSearchInfos.map(info => (
        <MultiSearchCard key={info.id} data={info} />
      ))}
    </MultiSearchCardContainer>
  </Section>
)

export default SearchResult
