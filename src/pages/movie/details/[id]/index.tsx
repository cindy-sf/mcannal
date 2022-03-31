import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Badge from '@components/Badge'
import Layout from '@components/Layout'
import Loader from '@components/Loader'
import Rating  from '@components/Rating'
import StickyBar from '@components/StickyBar'
import Text from '@components/Text'

import { getCredits, getDetails } from '@src/services/movies/details'
import { MOVIE_DB_BASE_POSTER_PATH } from '@src/services/constants'

import type { Credits, MovieDetails, MoviesDetailsApiResponseError } from '@src/types/movies'

import CardPlaceholder from '@assets/images/card-placeholder.png'
import ErrorIllustration from '@assets/images/error-image.png'
import Wave from '@assets/images/wave.png'

import {
  Badges,
  CastingContainer,
  ImageContainer,
  ImageWrapper,
  MovieDetailsContainer,
  WaveContainer,
} from './index.styles'

const ErrorScreen = dynamic(
  () => import('@components/InfoScreen'),
)

const convertMovieDuration = (movieDuration: number | null): string => {
  if (!movieDuration || movieDuration === 0) return 'Inconnue'

  const minutes = movieDuration % 60
  const hour = Math.floor(movieDuration / 60)

  const convertedMinutes = minutes > 0 ? `${minutes}` : '00'

  return `${hour}h${convertedMinutes}`
}

const isMovieError = (movie: Credits | MovieDetails | MoviesDetailsApiResponseError): movie is MoviesDetailsApiResponseError => {
  return (movie as MoviesDetailsApiResponseError).success === false
}

const Details = () => {
  const router = useRouter()
  const [hasError, setHasError] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [movie, setMovie] = useState<MovieDetails>()
  const [credits, setCredits] = useState<Credits>()

  useEffect(() => {
    const getMovieDetails = async (): Promise<void> => {
      if (!router.isReady) return

      if (router.query.id) {
        const movieId = Array.isArray(router.query.id)
          ? router.query.id[0]
          : router.query.id

        const details = await getDetails(Number(movieId))
        const credits = await getCredits(Number(movieId))

        if (isMovieError(details) || isMovieError(credits)) {
          setHasError(true)
          return
        }

        try {
          setIsFetching(true)
          setMovie(details)
          setCredits(credits)
        } catch(error) {
          setHasError(true)
        } finally {
          setIsFetching(false)
        }
      }
    }

    getMovieDetails()
  }, [router.isReady, router.query.q])

  if (hasError) return (
    <Layout pageTitle="Détails erreur">
      <StickyBar />
      <ErrorScreen
        cta={{
          onClick: (): Promise<boolean> => router.push('/'),
          title: 'Accueil',
        }}
        illustration={ErrorIllustration}
        title="Un problème technique est malheureusement survenu..."
        titleMaxWidth="44rem"
      />
    </Layout>
  )

  if (!movie || !credits || isFetching) return <Loader />

  return (
    <Layout pageTitle="Détails">
      <StickyBar withTransparentBg />
      <WaveContainer>
        <Image
          src={Wave}
          width="100%"
          height={25}
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
          {credits?.crew.find(person => person.job === 'Director')?.name || 'Réalisateur inconnu'}
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
        {credits?.cast.map(person => (
          <ImageWrapper key={person.id}>
            <Image
              title={person.name}
              src={`${MOVIE_DB_BASE_POSTER_PATH}/${person.profile_path}`}
              width={65}
              height={65}
              layout="fixed"
            />
          </ImageWrapper>
        ))}
        {!credits.crew.length && (
          <Text>
            Désolé, nous aucun n’avons pas trouvé d acteur pour ce film..
          </Text>
        )} 
      </CastingContainer>
    </Layout>
  )
}

export default Details
