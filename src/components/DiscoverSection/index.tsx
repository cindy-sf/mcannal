import React, { VFC } from 'react'

import MovieCard from '@components/MovieCard'

import type { TrendingData } from '@src/types/common'

import {
  MovieCardContainer,
  Section,
  Title,
} from './index.styles'

const DiscoverSection:VFC<TrendingData> = ({ popular, topRated, upcoming }) => {
  return (
    <>
      <Section>
        <Title>
          À ne pas manquer
        </Title>
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
        <Title>
          Nouveautés
        </Title>
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
        <Title>
          Les mieux notés
        </Title>
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
