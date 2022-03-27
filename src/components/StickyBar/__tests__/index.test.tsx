import React from 'react'
import { render, screen } from '@testing-library/react'

import StickyBar from '..'

describe('StickyBar', () => {
  describe('render', () => {
    it("should render correctly the StickyBar with the brand title and child", () => {
      // GIVEN
      render(
        <StickyBar>
          <div>
            <p>Child elem</p>
          </div>
        </StickyBar>
      )

      // THEN
      expect(screen.getByAltText('MyCanal ++')).toBeInTheDocument()
      expect(screen.getByText('MyCanal ++')).toBeInTheDocument()
      expect(screen.getByText('Child elem')).toBeInTheDocument()
    })
  })
})
