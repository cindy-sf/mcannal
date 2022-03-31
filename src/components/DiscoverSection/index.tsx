import React, { ReactElement, VFC } from 'react'

import TrendingCard from '@components/TrendingCard'

import type { TrendingData } from '@src/types/common'

import { TrendingCardContainer, Section } from './index.styles'
import Text from '@components/Text'

const DiscoverSection: VFC<TrendingData> = ({
  popular,
  topRated,
  upcoming,
}): ReactElement => (
  <>
    <Section>
      <Text as="h2" size="large">
        À ne pas manquer
      </Text>
      <TrendingCardContainer>
        {popular.map((movie) => (
          <TrendingCard key={movie.id} data={movie} />
        ))}
      </TrendingCardContainer>
    </Section>
    <Section>
      <Text as="h2" size="large">
        Les mieux notés
      </Text>
      <TrendingCardContainer>
        {topRated.map((movie) => (
          <TrendingCard key={movie.id} data={movie} />
        ))}
      </TrendingCardContainer>
    </Section>
    <Section>
      <Text as="h2" size="large">
        Nouveautés
      </Text>
      <TrendingCardContainer>
        {upcoming.map(movie => (
          <TrendingCard
            key={movie.id}
            data={movie}
          />
        ))}
      </TrendingCardContainer>
    </Section>
  </>
)

export default DiscoverSection
