import { renderHook } from '@testing-library/react-hooks'

import { useWindowSize } from '..'

describe('useWindowSize', () => {
  it('should return the size of the page', () => {
    // GIVEN
    global.innerWidth = 1440
    global.innerHeight = 838

    const { result } = renderHook(useWindowSize)

    // THEN
    expect(result.current).toStrictEqual({
      width: 1440,
      height: 838,
    })
  })
})
