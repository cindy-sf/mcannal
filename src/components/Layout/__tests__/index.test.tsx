import { render, screen } from '@testing-library/react'

import Layout from '..'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

describe('Layout', () => {
  describe('render', () => {
    it("should render correctly the component with it's child and footer", () => {
      // GIVEN
      render(
        <Layout pageTitle="Test page">
          <p>Toto</p>
        </Layout>
      )

      // THEN
      expect(screen.getByText('Toto')).toBeInTheDocument()
      expect(
        screen.getByText('Made with ❤️ by Cindy Saint Fleurant', {
          exact: true,
        })
      ).toBeInTheDocument()
    })

    it('should render the dynamic title in head', () => {
      // GIVEN
      render(
        <Layout pageTitle="Test page">
          <p>Toto</p>
        </Layout>,
        { container: document.head }
      )

      // THEN
      expect(document.title).toEqual('MyCanal ++ | Test page')
    })
  })
})
