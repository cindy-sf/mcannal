import React, { VFC } from 'react'
import { useRouter } from 'next/router'

import Badge from '@components/Badge'
import Rating from '@components/Rating'
import Text from '@components/Text'

import { MOVIE_DB_BASE_POSTER_PATH } from '@src/services/constants'

import type { MultiSearchMovies, MultiSearchShows } from '@src/types/common'

import CardPlaceholder from '@assets/images/card-placeholder.png'

import {
  Container,
  Image,
  ImageWrapper,
  MultiSearchCardWrapper,
  Rate,
  TitleWrapper,
} from './index.styles'
 
interface Props {
  data: MultiSearchMovies | MultiSearchShows
}

const isMovie = (movie: MultiSearchMovies | MultiSearchShows): movie is MultiSearchMovies => {
  return (movie as MultiSearchMovies).title !== undefined
}

const MultiSearchCard:VFC<Props> = ({ data }) => {
  const router = useRouter()
  const isMovieType = isMovie(data)
  const title = isMovieType ? data.title : data.name
  const badgeTitle = data.media_type === 'movie' ? 'Film' : 'Série'
  const redirectionUrl = isMovieType ? { pathname: '/movie/details/[id]', query: { id: data.id } } : '/no-more-time'

  return (
    <MultiSearchCardWrapper
      onClick={(): void => {
        router.push(redirectionUrl)
      }} 
    >
      <ImageWrapper>
        <Image
          src={
            data.poster_path
            ? `${MOVIE_DB_BASE_POSTER_PATH}/${data.poster_path}`
            : CardPlaceholder}
            width={220}
            height={320}
            layout="fixed"
            role="img"
            data-testid={`${title} --poster${!data.poster_path ? '-fallback' : ''}`}
        />
      </ImageWrapper>
      <Container>
        <TitleWrapper>
          <Text
            as="h3"
            size="large"
            marginBottom="xSmall"
            marginRight="xSmall"
            maxWidth="25rem"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Text>
          <Badge title={badgeTitle} color="black" size="small" />
        </TitleWrapper>
        <Text
          cursor="pointer"
          colorHover="purple"
          marginBottom="xSmall"
        >
          {data.overview.slice(0, 262) || 'Pas de description pour ce média'}...
          </Text>
        <Rate>
          <Rating notation={data.vote_average} />
        </Rate>
      </Container>
    </MultiSearchCardWrapper>
  )
}

export default MultiSearchCard
