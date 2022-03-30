import NextImage from 'next/image'
import styled from 'styled-components'

export const Image = styled(NextImage)`
  transition: transform ease-in 0.2s;

  &:hover {
    transform: scale(1.1);
    filter: grayscale(100%);
  }
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.large};

  img {
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.large};
  }
`

export const TrendingCardWrapper = styled.a`
  margin-right: ${({ theme }) => theme.space.small};
`

export const Rate = styled.div`
  display: flex;
`
