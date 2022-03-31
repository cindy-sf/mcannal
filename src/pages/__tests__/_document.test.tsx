import { render } from '@testing-library/react'

import Document from '../_document'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

describe.skip('Document', () => {
  it('should render with good metadatas', () => {
    // GIVEN
    render(<Document />)

    // THEN
    // @todo
  })
})
