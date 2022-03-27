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
  border-radius: 3.2rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`

export const MovieCardWrapper = styled.a<{ horizontal?: boolean }>`
  margin-right: 1.6rem;

  ${({ horizontal }) => horizontal && `
    // @todo...
  `}
`

export const Rate = styled.div`
  display: flex;
`

export const Text = styled.p`
  font-size: 1.8rem;
  margin-top: 1.2rem;
  font-weight: 600;
  max-width: 22rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
