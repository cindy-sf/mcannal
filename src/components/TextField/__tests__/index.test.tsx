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

  describe('with initial value', () => {
    it('should set the input value with an inititial value when it is given', () => {
      // GIVEN
      render(<TextField initialValue="Lorem ipsum" />)

      // THEN
      expect(screen.getByDisplayValue('Lorem ipsum')).toBeInTheDocument()
    })
  })

  describe('research', () => {
    const routerPush = jest.fn()
    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        push: routerPush,
      }))
    })

    it('should redirect to the search page with by pressing enter key', () => {
      // GIVEN
      render(<TextField />)
  
      // WHEN
      userEvent.type(screen.getByPlaceholderText(placeholderText), 'Black mirror')
      // AND
      userEvent.keyboard('{enter}')
  
      // THEN
      expect(routerPush).toHaveBeenCalledTimes(1)
      expect(routerPush).toHaveBeenCalledWith({ pathname: '/search', query: { q: 'Black mirror' }})
    })

    it('should not do the rediction when the value of the input is invalid by pressing enter key', () => {
      // GIVEN
      render(<TextField />)
  
      // WHEN
      userEvent.type(screen.getByPlaceholderText(placeholderText), '  ')
      // AND
      userEvent.keyboard('{enter}')
  
      // THEN
      expect(routerPush).not.toHaveBeenCalled()
    })
  })
})
