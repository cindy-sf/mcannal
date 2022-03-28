import React from 'react'
import { render, screen } from '@testing-library/react'

import Rating from '..'

describe('Rating', () => {
  describe('render', () => {
    it.each([
      [10, 0, 0, 5],
      [0, 5, 0, 0],
      [8, 1, 0, 4],
      [7, 1, 1, 3]
    ])('should render the stars correctly according the average for "%s" note',
      (notation, expectedUnStars, expectedMidStars, expectedFullStars) => {
        // GIVEN
        render(<Rating notation={notation} />)

        // THEN
        expect(screen.queryAllByTestId('full-star')).toHaveLength(expectedFullStars)
        expect(screen.queryAllByTestId('mid-star')).toHaveLength(expectedMidStars)
        expect(screen.queryAllByTestId('empty-star')).toHaveLength(expectedUnStars)
      }
    )
  })
})
