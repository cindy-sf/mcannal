import styled from 'styled-components'

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.space.medium} 0;
  margin-top: ${({ theme }) => theme.space.large};
`

export const Main = styled.main`
  max-width: 106rem;
  padding: 2rem 6.4rem;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`
