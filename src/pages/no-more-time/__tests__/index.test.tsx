import { useRouter } from 'next/router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NoMoreTime from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('No more time', () => {
  describe('render', () => {
    it('should render the page correctly with the title, illustration, and button', () => {
      // GIVEN
      render(<NoMoreTime />)

      // THEN
      expect(
        screen.getByText(
          'Désolé, je n’ai pas eu le temps pour développer cette page 😓',
          { exact: true }
        )
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Retourner à l’accueil' })
      ).toBeInTheDocument()
      expect(
        screen.getByAltText(
          'Désolé, je n’ai pas eu le temps pour développer cette page 😓'
        )
      ).toBeInTheDocument()
    })
  })

  it('should do a redirection to the home page by clicking on "accueil" button', () => {
    // GIVEN
    const routerPush = jest.fn()
    const mockedUseRouter = useRouter as jest.Mock
    mockedUseRouter.mockImplementation(() => ({
      push: routerPush,
    }))
    render(<NoMoreTime />)

    // WHEN
    userEvent.click(
      screen.getByRole('button', { name: 'Retourner à l’accueil' })
    )

    // THEN
    expect(routerPush).toHaveBeenCalledTimes(1)
    expect(routerPush).toHaveBeenCalledWith('/')
  })
})
