import React, { FC, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@styles/theme'

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (ui: ReactElement) =>  render(ui, { wrapper: AllTheProviders })

export * from '@testing-library/react'

export { customRender as render }
