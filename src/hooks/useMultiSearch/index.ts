import { useEffect, useState } from 'react'

import { getDataByMultiSearch } from '@src/services/common'

import type {
  MultiSearchMovies,
  MultiSearchPeople,
  MultiSearchShows,
} from '@src/types/common'

interface MultiSearchInfos {
  infos?: (MultiSearchMovies | MultiSearchShows)[]
  hasFetched?: boolean
  totalPage?: number
}

const isPersonData = (data: MultiSearchMovies | MultiSearchShows | MultiSearchPeople): data is MultiSearchPeople => {
  return (data as MultiSearchPeople).media_type === 'person'
}

export const useMultiSearch = (page: number, query?: string): MultiSearchInfos => {
  const [multiSearchInfos, setMultiSearchInfos] = useState<MultiSearchInfos>()
  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return

      try {
        setHasFetchedData(false)
        const multiSearchInfosData = await getDataByMultiSearch(query, page)

        // filter the api response for getting only movies and tv shows data
        // cast here because we are sure that `filteredMultiSearchInfosData` equal to MultiSearchInfos['infos]
        const filteredMultiSearchInfosData = multiSearchInfosData.results.filter(data => !isPersonData(data)) as MultiSearchInfos['infos']

        // concat the new data with the current state only if it's not a new search
        if (page !== 1) {
          setMultiSearchInfos(currentState => ({
            infos: currentState?.infos?.concat(filteredMultiSearchInfosData ?? []),
            totalPage: multiSearchInfosData.total_pages,
          }))
          return
        }

        setMultiSearchInfos({
          infos: filteredMultiSearchInfosData ?? [],
          totalPage: multiSearchInfosData.total_pages,
        })
      } catch (error) {
        console.error(error)
      } finally {
        setHasFetchedData(true)
      }
    }

    fetchData()
  }, [query, page])

  return {
    infos: multiSearchInfos?.infos,
    hasFetched: hasFetchedData,
    totalPage: multiSearchInfos?.totalPage,
  }
}

export default useMultiSearch
