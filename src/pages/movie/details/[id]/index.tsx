import React, { FC, ReactElement, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import Layout from '@components/Layout'
import Loader from '@components/Loader'
import StickyBar from '@components/StickyBar'

import { getCredits, getDetails } from '@src/services/movies/details'

import type { Credits, MovieDetails, MoviesDetailsApiResponseError } from '@src/types/movies'

import ErrorIllustration from '@assets/images/error-image.png'

const DetailsInfos = dynamic(
  () => import('./components/DetailsInfos'),
)

const ErrorScreen = dynamic(
  () => import('@components/InfoScreen'),
)

const isMovieError = (movie: Credits | MovieDetails | MoviesDetailsApiResponseError): movie is MoviesDetailsApiResponseError => {
  return (movie as MoviesDetailsApiResponseError).success === false
}

const Details: FC = (): ReactElement => {
  const router = useRouter()
  const [hasError, setHasError] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(true)
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
          setIsFetching(false)
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

  // isolate those logic to some consts for comprehension
  const shouldDisplayLoader = isFetching && (!movie || !credits)
  const shouldDisplayDetailsInfos = !isFetching && movie && credits
  const shouldDisplayError = hasError

  return (
    <Layout pageTitle="Détails">
      <StickyBar withTransparentBg />
      {shouldDisplayLoader && <Loader />}
      {shouldDisplayError && (
        <ErrorScreen
          cta={{
            onClick: () => router.push('/'),
            title: 'Accueil',
          }}
          illustration={ErrorIllustration}
          title="Un problème technique est malheureusement survenu..."
          titleMaxWidth="44rem"
        />
      )}
      {shouldDisplayDetailsInfos && (
        <DetailsInfos movie={movie} credits={credits} />
      )}
    </Layout>
  )
}

export default Details
