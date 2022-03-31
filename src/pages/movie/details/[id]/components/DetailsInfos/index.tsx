import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import Badge from '@components/Badge'
import Rating  from '@components/Rating'
import Text from '@components/Text'

import { MOVIE_DB_BASE_POSTER_PATH } from '@src/services/constants'
import type { Credits, MovieDetails } from '@src/types/movies'

import CardPlaceholder from '@assets/images/card-placeholder.png'
import Wave from '@assets/images/wave.png'

import {
  Badges,
  CastingContainer,
  ImageContainer,
  ImageWrapper,
  MovieDetailsContainer,
  WaveContainer,
} from './index.styles'

interface Props {
  movie: MovieDetails
  credits: Credits
}

const convertMovieDuration = (movieDuration: number | null): string => {
  if (!movieDuration || movieDuration === 0) return 'Inconnue'

  const minutes = movieDuration % 60
  const hour = Math.floor(movieDuration / 60)

  const convertedMinutes = minutes > 0 ? `${minutes}` : '00'

  return `${hour}h${convertedMinutes}`
}

export const DetailsInfos: VFC<Props> = ({ movie, credits }): ReactElement => (
  <>
    <WaveContainer>
      <Image
        src={Wave}
        width="100%"
        height={20}
        layout="responsive"
      />
    </WaveContainer>
    <MovieDetailsContainer>
      <ImageContainer>
        <Image
          src={movie.poster_path
            ? `${MOVIE_DB_BASE_POSTER_PATH}/${movie.poster_path}`
            : CardPlaceholder}
          width={240}
          height={350}
          layout="fixed"
        />
      </ImageContainer>
      <Text
        as="h2"
        marginTop="xxLarge"
        size="xLarge"
        maxWidth="55rem"
        textAlign="center"
      >
        {movie.title}
      </Text>
      <Text marginTop="xSmall">
        {credits.crew.find(person => person.job === 'Director')?.name || 'Réalisateur inconnu'}
      </Text>
      <Rating  notation={movie.vote_average} />
      <Badges>
        {movie.genres?.map(({ id, name }) => (
          <Badge key={id} title={name} color="black" />
        ))}
      </Badges>
    </MovieDetailsContainer>
    <Text textAlign="center" marginTop="small">
      {movie.release_date.split('-').reverse().join('/')} • {convertMovieDuration(movie.runtime)} • {movie.original_language}
    </Text>
    <Text
      as="h3"
      size="large"
      marginTop="large"
    >
      Résumé
    </Text>
    <Text marginTop="medium" size="medium">
      {movie.overview || 'Désolé, nous aucun n’avons pas de résumé pour ce film...'}
    </Text>
    <Text
      as="h3"
      size="large"
      marginTop="xLarge"
    >
      Casting
    </Text>
    <CastingContainer>
      {credits.cast.map(person => (
        <ImageWrapper key={person.id}>
          <Image
            title={`${person.name} | ${person.character}`}
            src={`${MOVIE_DB_BASE_POSTER_PATH}/${person.profile_path}`}
            width={65}
            height={65}
            layout="fixed"
          />
        </ImageWrapper>
      ))}
      {!credits.cast.length && (
        <Text>
          Désolé, nous aucun n’avons pas trouvé d’acteur pour ce film...
        </Text>
      )} 
    </CastingContainer>
  </>
)

export default DetailsInfos