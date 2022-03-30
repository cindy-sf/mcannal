import React, { VFC } from 'react'

import MovieCard from '@components/MovieCard'

import type { TrendingData } from '@src/types/common'

import {
  MovieCardContainer,
  Section,
} from './index.styles'
import Text from '@components/Text'

const DiscoverSection:VFC<TrendingData> = ({ popular, topRated, upcoming }) => {
  return (
    <>
      <Section>
        <Text as="h2" size="large">
          À ne pas manquer
        </Text>
        <MovieCardContainer>
          {popular.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </MovieCardContainer>
      </Section>
      <Section>
        <Text as="h2" size="large">
          Nouveautés
        </Text>
        <MovieCardContainer>
          {upcoming.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </MovieCardContainer>
      </Section>
      <Section>
        <Text as="h2" size="large">
          Les mieux notés
        </Text>
        <MovieCardContainer>
          {topRated.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </MovieCardContainer>
      </Section>
    </>
  )
}

export default DiscoverSection
