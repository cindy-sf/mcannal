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
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: #F2F2F2;
  padding: ${({ theme }) => theme.space.large};
  padding-bottom: ${({ theme }) => theme.space.none};
  margin-top: ${({ theme }) => theme.space.large};
`
