import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'

import Badge from '@components/Badge'
import Layout from '@components/Layout'
import MovieCard from '@components/MovieCard'
import StickyBar from '@components/StickyBar'
import TextField from '@components/TextField'
import WelcomeInsert from '@components/WelcomeInsert'

import { getTrendings as getTrendingsMovies } from '@src/services/movies/discover'
import { getTrendings as getTrendingsShows } from '@src/services/shows/discover'

import type { Movies } from '@src/types/movies'
import type { TvShows } from '@src/types/shows'

import {
  Badges,
  MoviCardContainer,
  Section,
  Title
} from './index.styles'

// interface TrendingMovies {
//   popular: Movies[]
//   upcoming: Movies[]
//   topRated: Movies[]
// }

const Home: NextPage = () => {
  // const [trendingMovies, setTrendingMovies] = useState<TrendingMovies>()
  const [popularMovies, setPopularMovies] = useState<Movies[]>()
  const [upcomingMovies, setUpcomingMovies] = useState<Movies[]>()
  const [topRatedMovies, setTopRatedMovies] = useState<Movies[]>()
  const [popularShows, setPopularShows] = useState<TvShows[]>()
  const [upcomingShows, setUpcomingShows] = useState<TvShows[]>()
  const [topRatedShows, setTopRatedShows] = useState<TvShows[]>()
  
  const [discoverType, setDiscoverType] = useState<'movies' | 'tvShows'>('movies')
  const [shouldDisplayError, setShouldDisplayError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (discoverType === 'tvShows') {
           // has already fetched the data
          if (upcomingShows?.length && topRatedShows?.length && popularShows?.length) {
            return
          }
          setPopularShows((await getTrendingsShows('popular')).results)
          setUpcomingShows((await getTrendingsShows('upcoming')).results)
          setTopRatedShows((await getTrendingsShows('topRated')).results)
          return
        }
        // has already fetched the data
        if (upcomingMovies?.length && topRatedMovies?.length && popularMovies?.length) {
          return
        }
        setPopularMovies((await getTrendingsMovies('popular')).results)
        setUpcomingMovies((await getTrendingsMovies('upcoming')).results)
        setTopRatedMovies((await getTrendingsMovies('topRated')).results)
      } catch (error) {
        setShouldDisplayError(true)
        console.error(error)
      }
    }

    fetchData()
  }, [discoverType])

  return (
    <Layout pageTitle="Accueil">
      <StickyBar>
        <TextField />
      </StickyBar>
      <WelcomeInsert />
      <Badges>
        <Badge
          title="Films"
          color={discoverType === 'movies' ? 'purple' : 'black'}
          variant={discoverType === 'movies' ? 'contained' : 'outlined'}
          onClick={():void => setDiscoverType('movies')}
        />
        <Badge
          title="Séries"
          color={discoverType === 'tvShows' ? 'purple' : 'black'}
          variant={discoverType === 'tvShows' ? 'contained' : 'outlined'}
          onClick={():void => setDiscoverType('tvShows')}
        />
      </Badges>
      {discoverType === 'movies' && (
        <>
          <Section>
            <Title>
              À ne pas manquer
            </Title>
            <MoviCardContainer>
              {popularMovies?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviCardContainer>
          </Section>
          <Section>
            <Title>
              Nouveautés
            </Title>
            <MoviCardContainer>
              {upcomingMovies?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviCardContainer>
          </Section>
          <Section>
            <Title>
              Les mieux notés
            </Title>
            <MoviCardContainer>
              {topRatedMovies?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviCardContainer>
          </Section>
        </>
      )}
      {discoverType === 'tvShows' && (
        <>
          <Section>
            <Title>
              À ne pas manquer
            </Title>
            <MoviCardContainer>
              {popularShows?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviCardContainer>
          </Section>
          <Section>
            <Title>
              Nouveautés
            </Title>
            <MoviCardContainer>
              {upcomingShows?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviCardContainer>
          </Section>
          <Section>
            <Title>
              Les mieux notés
            </Title>
            <MoviCardContainer>
              {topRatedShows?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MoviCardContainer>
          </Section>
        </>
      )}
    </Layout>
  )
}

export default Home
