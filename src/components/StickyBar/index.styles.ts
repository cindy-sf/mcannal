import styled from 'styled-components'

export const StickyBarWrapper = styled.nav<{ width?: number }>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding-top: ${({ theme }) => theme.space.small};
  padding-bottom: ${({ theme }) => theme.space.small};
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 5;
`
