import styled from 'styled-components'

export const Badges = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 45rem;
  margin-top: ${({ theme }) => theme.space.medium};
`

export const CastingContainer = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.space.medium};
  flex-wrap: wrap;

  img {
    border-radius: 50%;
    display: block;
    margin-right: ${({ theme }) => theme.space.medium};
  }
`

export const ImageContainer = styled.div`
  img {
    border-radius: ${({ theme }) => theme.radius.large};
    object-fit: cover;
  }
`

export const ImageWrapper = styled.div`
  margin-right: ${({ theme }) => theme.space.medium};
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.radius.large};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.medium};

  img {
    border-radius: ${({ theme }) => theme.radius.large};
    object-fit: cover;
  }
`

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.xxLarge};
`

export const WaveContainer = styled.div`
  max-width: 115rem;
  height: 5rem;
  position: absolute; 
  left: 0; 
  right: 0;
  top: 0;
  margin-left: auto; 
  margin-right: auto; 
  z-index: -1;
  height: 15rem;
`
