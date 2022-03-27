import React, { VFC } from 'react'
import { useRouter } from 'next/router'

import Rating from '@components/Rating'

import { MOVIE_DB_BASE_POSTER_PATH } from '@src/services/constants'
import type { Movies } from '@src/types/movies'

import CardPlaceholder from '@assets/images/card-placeholder.png'

import { Image, ImageWrapper, MovieCardWrapper, Rate, Text } from './index.styles'

interface Props {
  horizontal?: boolean
  movie: Movies
}

const MovieCard:VFC<Props> = ({ horizontal, movie }) => {
  const router = useRouter()

  return (
    <MovieCardWrapper
      horizontal={horizontal}
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
            data-testid={`${movie.title}-poster`}
        />
      </ImageWrapper>
      <Text>{movie.title}</Text>
      <Rate>
        <Rating notation={movie.vote_average} />
      </Rate>
      </MovieCardWrapper>
  )
}

export default MovieCard
