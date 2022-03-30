import NextImage from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 45%;
  margin-left: ${({ theme }) => theme.space.xLarge};
`

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

export const MultiSearchCardWrapper = styled.a<{ horizontal?: boolean }>`
  margin-bottom: ${({ theme }) => theme.space.large};
  display: flex;
`

export const Rate = styled.div`
  display: flex;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
