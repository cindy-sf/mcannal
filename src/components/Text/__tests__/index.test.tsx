import React from 'react'
import { render, screen } from '@testing-library/react'

import Text from '..'

describe('Text', () => {
  it('should render the text correctly with the good tag', () => {
    // GIVEN
    render(<Text as="p">Some text...</Text>)

    // THEN
    expect(screen.getByText('Some text...')).toBeInTheDocument()
  })
})
