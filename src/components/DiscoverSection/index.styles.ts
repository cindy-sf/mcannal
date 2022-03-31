import styled from 'styled-components'

export const TrendingCardContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.medium};
  padding-bottom: ${({ theme }) => theme.space.small};
  overflow-x: scroll;
  scrollbar-color: ${({ theme }) => `${theme.colors.grey} ${theme.colors.white}`};
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
    height: 1.2rem;
  }

  ::-webkit-scrollbar-thumb {
    cursor: grab;
      background: #B6B2B2;
      border-radius: ${({ theme }) => theme.radius.small};
  }
`

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`
