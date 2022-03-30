import React, { VFC } from 'react'
import { useRouter } from 'next/router'

import Rating from '@components/Rating'
import Text from '@components/Text'

import { MOVIE_DB_BASE_POSTER_PATH } from '@src/services/constants'
import type { Movies } from '@src/types/movies'
import type { TvShows } from '@src/types/shows'

import CardPlaceholder from '@assets/images/card-placeholder.png'

import { Image, ImageWrapper, MovieCardWrapper, Rate } from './index.styles'

interface Props {
  movie: Movies | TvShows
}

const isMovie = (movie: Movies | TvShows): movie is Movies => {
  return (movie as Movies).title !== undefined
}

const MovieCard:VFC<Props> = ({ movie }) => {
  const router = useRouter()
  const isMovieType = isMovie(movie)
  const title = isMovieType ? movie.title : movie.name

  return (
    <MovieCardWrapper
      onClick={(): void => {
        router.push({
          pathname: '/movie/details/[id]',
          query: { id: movie.id },
        })
      }}
    >
      <ImageWrapper>
        <Image
          src={
            movie.poster_path
            ? `${MOVIE_DB_BASE_POSTER_PATH}/${movie.poster_path}`
            : CardPlaceholder}
            width={220}
            height={320}
            layout="fixed"
            role="img"
            data-testid={`${title} --poster${!movie.poster_path ? '-fallback' : ''}`}
        />
      </ImageWrapper>
      <Text
        size="medium"
        mt="xSmall"
        fontWeight="bold"
        maxWidth="22rem"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {title}
      </Text>
      <Rate>
        <Rating notation={movie.vote_average} />
      </Rate>
      </MovieCardWrapper>
  )
}

export default MovieCard
