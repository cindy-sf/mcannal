import React from 'react'
import { render, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'

import { creditsStub, detailsErrorStub, detailsStub } from '@src/__mocks__/stubs/movies/details'

import Details from '..'
import userEvent from '@testing-library/user-event'

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    })
  },
}))
const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe('Details', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  beforeEach(() => {
    fetchMock.enableMocks()
    fetchMock.doMock()
  })
  afterEach(() => {
    jest.clearAllMocks()
    fetchMock.mockClear()
  })

  describe('render', () => {
    describe('without data', () => {
      describe('loader', () => {
        it("should render the loader while the router is not ready", () => {
          // GIVEN
          useRouter.mockImplementation(() => ({
            route: "/",
            isReady: false,
            query: {
              id: "12345",
            },
          }))
          fetchMock.mockImplementation(() => new Promise(() => {}))
  
          render(<Details />)
    
          // THEN
          expect(screen.getByText('Chargement...', { exact: true })).toBeInTheDocument()
        })

        it("should render the loader while the data is fetching", () => {
          // GIVEN
          useRouter.mockImplementation(() => ({
            route: "/",
            isReady: true,
            query: {
              id: ["12345", "6789"],
            },
          }))
          fetchMock.mockImplementation(() => new Promise(() => {}))
  
          render(<Details />)
    
          // THEN
          expect(screen.getByText('Chargement...', { exact: true })).toBeInTheDocument()
        })
      })

      describe('error', () => {
        const routerPush = jest.fn()
        beforeEach(() => {
          useRouter.mockImplementation(() => ({
            route: "/",
            isReady: true,
            query: {
              id: "12345",
            },
            push: routerPush,
          }))
          fetchMock.mockResponse(JSON.stringify(detailsErrorStub))
        })

        it("should render the error on api call failed", async () => {
          // GIVEN  
          render(<Details />)
    
          // THEN
          expect(await screen.findByText('Un problème technique est malheureusement survenu...', { exact: true })).toBeInTheDocument()
        })

        it("should redirect to home by clicking on button", async () => {
          // GIVEN  
          render(<Details />)
    
          // WHEN
          userEvent.click(await screen.findByRole('button', { name: 'Accueil' }))

          // THEN
          expect(routerPush).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe('with data', () => {
      it("should render the details infos", async () => {
        // GIVEN
        useRouter.mockImplementation(() => ({
          route: "/",
          isReady: true,
          query: {
            id: "12345",
          },
        }))
        fetchMock.mockResponses(JSON.stringify(detailsStub), JSON.stringify(creditsStub))

        render(<Details />)
  
        // THEN
        expect(await screen.findByText(detailsStub.title)).toBeInTheDocument()
      })
    })
  })
})
