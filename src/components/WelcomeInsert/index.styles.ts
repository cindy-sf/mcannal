import styled from 'styled-components'

export const ImageContainer = styled.div`
  img {
    object-fit: contain;
  }
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 3.2rem;
  background-color: #F2F2F2;
  padding: 3.2rem 0 1.6rem 3.2rem;
  margin-top: 2.4rem;
`

export const Text = styled.p`
  font-size: 2.4rem;
  margin-top: 3.2rem;
  max-width: 70%;
`

export const Title = styled.h2`
  font-size: 3.2rem;

  span {
    color: #0D10FF;
  }
`
