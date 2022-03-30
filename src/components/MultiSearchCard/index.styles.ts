import NextImage from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 45%;
  margin-left: 5.2rem;
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
  border-radius: 3.2rem;

  img {
    object-fit: cover;
    border-radius: 3.2rem;
  }
`

export const MultiSearchCardWrapper = styled.a<{ horizontal?: boolean }>`
  margin-bottom: 2.6rem;
  display: flex;
`

export const Rate = styled.div`
  display: flex;
`

export const Text = styled.p`
  font-size: 1.6rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;

  :hover {
    color: #090DE8;
  }
`
export const Title = styled.h3`
  font-size: 2.8rem;
  margin-right: 1.2rem;
  max-width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
