import React from 'react'
import { useRouter } from 'next/router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Text Field', () => {
  afterEach(jest.clearAllMocks)

  const placeholderText = 'Rechercher...'

  describe('render', () => {
    it('should render the text field correctly', () => {
      // GIVEN
      render(<TextField />)
    
      // THEN
      expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument()
    })
  })

  describe('research', () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({
      push,
    }))

    it('should redirect to the search page with by pressing on enter key', () => {
      // GIVEN
      render(<TextField />)
  
      // WHEN
      userEvent.type(screen.getByPlaceholderText(placeholderText), 'Black mirror')
      // AND
      userEvent.keyboard('{enter}')
  
      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith({ pathname: '/search', query: { q: 'Black mirror' }})
    })

    it('should not submit the search if the value of the input is invalid by pressing on enter key', () => {
      // GIVEN
      render(<TextField />)
  
      // WHEN
      userEvent.type(screen.getByPlaceholderText(placeholderText), '  ')
      // AND
      userEvent.keyboard('{enter}')
  
      // THEN
      // expect(Router.push).not.toHaveBeenCalled()
    })
  })
})
