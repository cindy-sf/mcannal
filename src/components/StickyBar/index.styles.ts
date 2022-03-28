import styled from 'styled-components'

export const StickyBarWrapper = styled.nav<{ width?: number }>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  top: 0;
  background-color: #fff;
  z-index: 5;
`
