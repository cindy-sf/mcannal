import styled from 'styled-components'

export const Badges = styled.div`
  display flex;
  margin-top: 5.2rem;
`

export const MoviCardContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;
  padding-bottom: 1.8rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
    height: 1.2rem;
  }

  ::-webkit-scrollbar-thumb {
    cursor: grab;
      background: #B6B2B2;
      border-radius: 1.6rem;
  }
  scrollbar-color: #B6B2B2 white;
  scrollbar-width: thin;
`

export const Section = styled.section`
  margin-top: 2.8rem;
`

export const Title = styled.h2`
  font-size: 2.8rem;
  margin-top: 2.6rem;
`
