import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '..'

describe('Text Field', () => {
  afterEach(jest.clearAllMocks)

  const defaultProps = {
    onSubmit: jest.fn(),
  }
  const placeholderText = 'Rechercher...'

  describe('render', () => {
    it('should render the text field correctly', () => {
      // GIVEN
      render(<TextField {...defaultProps} />)
    
      // THEN
      expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument()
    })
  })

  describe('research', () => {
    it('should submit the search if the value of the input is valid by pressing on enter key', () => {
      // GIVEN
      render(<TextField {...defaultProps} />)
  
      // WHEN
      userEvent.type(screen.getByPlaceholderText(placeholderText), 'Black mirror')
      // AND
      userEvent.keyboard('{enter}')
  
      // THEN
      expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1)
    })

    it('should not submit the search if the value of the input is invalid by pressing on enter key', () => {
      // GIVEN
      render(<TextField {...defaultProps} />)
  
      // WHEN
      userEvent.type(screen.getByPlaceholderText(placeholderText), '  ')
      // AND
      userEvent.keyboard('{enter}')
  
      // THEN
      expect(defaultProps.onSubmit).not.toHaveBeenCalled()
    })
  })
})
