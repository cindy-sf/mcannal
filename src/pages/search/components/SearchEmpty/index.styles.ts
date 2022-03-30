import styled from 'styled-components'

export const ImageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`

export const Screen = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100%;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xLarge}; 
  text-align: center;
  margin-top: ${({ theme }) => theme.space.xLarge};
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`
