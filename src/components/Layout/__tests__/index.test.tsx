import React from 'react'
import { render, screen } from '@testing-library/react'

import Layout from '..'

describe('Layout', () => {
  jest.mock('next/head', () => {
    return {
      __esModule: true,
      default: ({ children }: { children: Array<React.ReactElement> }) => {
        return <>{children}</>
      },
    }
  })

  describe('render', () => {
    it("should render correctly the component with it's child", () => {
      // GIVEN
      render(
        <Layout pageTitle="Test page">
          <p>Toto</p>
        </Layout>
      )

      // THEN
      expect(screen.getByText('Toto')).toBeInTheDocument()
    })

    // @todo: fix this test 
    it.skip("should render the dynamic title in head", () => {
      // GIVEN
      render(
        <Layout pageTitle="Test page">
          <p>Toto</p>
        </Layout>,
        { container: document.head }
      )

      // THEN
      screen.debug()
      expect(document.title).toEqual('Test page')
    })
  })
})
