import { MULTI_SEARCH_BASE_PATH } from '@src/services/constants'  

import type { MultiSearchApiResponse } from '@src/types/common'

export const getDataByMultiSearch = async (query: string, page: number): Promise<MultiSearchApiResponse> => {
  let url = `${MULTI_SEARCH_BASE_PATH}&query=${query}&page=${page}`
  const data = await fetch(url)
  return await data.json()
}

export default getDataByMultiSearch
