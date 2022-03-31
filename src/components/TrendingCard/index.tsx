import React, { ReactElement, VFC } from 'react'
import { useRouter } from 'next/router'

import Rating from '@components/Rating'
import Text from '@components/Text'

import { MOVIE_DB_BASE_POSTER_PATH } from '@src/services/constants'
import type { Movies } from '@src/types/movies'
import type { TvShows } from '@src/types/shows'

import CardPlaceholder from '@assets/images/card-placeholder.png'

import { Image, ImageWrapper, TrendingCardWrapper, Rate } from './index.styles'

interface Props {
  data: Movies | TvShows
}

const isMovie = (data: Movies | TvShows): data is Movies => {
  return (data as Movies).title !== undefined
}

const TrendingCard: VFC<Props> = ({ data }): ReactElement => {
  const router = useRouter()
  const isMovieType = isMovie(data)
  const title = isMovieType ? data.title : data.name
  const redirectionUrl = isMovieType
    ? { pathname: '/movie/details/[id]', query: { id: data.id } }
    : '/no-more-time'

  return (
    <TrendingCardWrapper
      onClick={(): void => {
        router.push(redirectionUrl)
      }}
    >
      <ImageWrapper>
        <Image
          src={
            data.poster_path
              ? `${MOVIE_DB_BASE_POSTER_PATH}/${data.poster_path}`
              : CardPlaceholder
          }
          width={220}
          height={320}
          layout="fixed"
          role="img"
          data-testid={`${title} --poster${
            !data.poster_path ? '-fallback' : ''
          }`}
        />
      </ImageWrapper>
      <Text
        size="medium"
        marginTop="xSmall"
        fontWeight="bold"
        maxWidth="22rem"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {title}
      </Text>
      <Rate>
        <Rating notation={data.vote_average} />
      </Rate>
    </TrendingCardWrapper>
  )
}

export default TrendingCard
