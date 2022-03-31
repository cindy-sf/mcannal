import { render, screen } from '@testing-library/react'

import App from '../_app'

// @todo
describe.skip('App', () => {
  it('should render the app', () => {
    // GIVEN
    render(
      <App pageProps={{}}>
        <div>Lorem ipsum</div>
      </App>
    )

    // THEN
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
  })
})
