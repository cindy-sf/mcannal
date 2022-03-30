import { render, screen } from '@testing-library/react'

import Illustration from '@src/assets/images/search-without-query.png'

import SearchEmpty from '..'
import userEvent from '@testing-library/user-event'

describe('SearchEmpty', () => {
  const defaultProps = {
    title: 'Some title',
    illustration: Illustration,
    cta: {
      title: 'Cta title',
      onClick: jest.fn(),
    },
  }

  it('should render the component correctly with his text, illustration and button', () => {
    // GIVEN
    render(<SearchEmpty {...defaultProps} />)

    // THEN
    expect(screen.getByText('Some title', { exact: true })).toBeInTheDocument()
    expect(screen.getByAltText('Some title', { exact: true })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cta title' })).toBeInTheDocument()
    expect(screen.getByText('Some title', { exact: true })).toBeInTheDocument()
  })

  it('should happend something by clicking on the cta', () => {
    // GIVEN
    render(
      <SearchEmpty {...defaultProps} />
    )

    // WHEN
    userEvent.click(screen.getByRole('button', { name: 'Cta title' }))

    // THEN
    expect(defaultProps.cta.onClick).toHaveBeenCalledTimes(1)
  })
})
