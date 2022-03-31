import React, { ReactElement, useEffect, useRef, useState, VFC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import Layout from '@components/Layout'
import StickyBar from '@components/StickyBar'
import TextField from '@components/TextField'

import { useMultiSearch } from '@src/hooks/useMultiSearch'

import SearchWithoutQueryIllustration from '@assets/images/search-without-query.png'
import SearchWithoutQueryResults from '@assets/images/search-without-results.png'

const Loader = dynamic(() => import('@components/Loader'))

const SearchEmpty = dynamic(() => import('@components/InfoScreen'))

const SearchResults = dynamic(() => import('./components/SearchResults'))

const Text = dynamic(() => import('@components/Text'))

const Search: VFC = (): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const router = useRouter()
  const textFieldRef = useRef<HTMLInputElement>(null)
  const {
    hasFetched,
    infos: multiSearchData,
    totalPage,
  } = useMultiSearch(page, query)

  useEffect(() => {
    const getQuery = (): void => {
      if (!router.isReady) return

      if (router.query.q) {
        const query = Array.isArray(router.query.q)
          ? router.query.q[0]
          : router.query.q

        setQuery(query)
        setPage(1)
      }
    }

    getQuery()
  }, [router.isReady, router.query?.q])

  const focusTextField = (): void => textFieldRef.current?.focus()

  // isolate those logic to some consts for comprehension
  const shouldDisplayLoader = !hasFetched && query
  const shouldDisplaySearchWithoutQuery = router.isReady && !router.query.q
  const shouldDisplaySearchWithoutResults =
    hasFetched && query && !multiSearchData?.length
  const shouldDisplaySearchWithResults = !!multiSearchData?.length
  const shouldDisplayShowMoreText =
    hasFetched && !!multiSearchData?.length && page !== totalPage

  return (
    <Layout pageTitle="Rechercher">
      {/*
        adding `key` property for triggered the update of the initialValue of input @see https://jaketrent.com/post/rerender-defaultvalue-value-change
      */}
      <StickyBar key={query}>
        <TextField initialValue={query} fieldRef={textFieldRef} />
      </StickyBar>
      {shouldDisplayLoader && <Loader />}
      {shouldDisplaySearchWithoutResults && (
        <SearchEmpty
          title={`Aucun resultat pour “ ${query} ”`}
          illustration={SearchWithoutQueryResults}
          cta={{
            onClick: focusTextField,
            title: 'Nouvelle recherche',
          }}
        />
      )}
      {shouldDisplaySearchWithoutQuery && (
        <SearchEmpty
          title="Effectuer une recherche"
          illustration={SearchWithoutQueryIllustration}
          cta={{
            onClick: focusTextField,
            title: 'Rechercher',
          }}
        />
      )}
      {shouldDisplaySearchWithResults && (
        <SearchResults multiSearchInfos={multiSearchData} query={query} />
      )}
      {shouldDisplayShowMoreText && (
        <Text
          onClick={(): void => setPage((currentPage) => currentPage + 1)}
          cursor="pointer"
          textAlign="center"
          textDecoration="underline"
        >
          Voir plus
        </Text>
      )}
    </Layout>
  )
}

export default Search
