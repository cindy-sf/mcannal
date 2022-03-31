import styled from 'styled-components'

export const ImageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`

export const ScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: ${({ theme }) => theme.space.xLarge};
  height: 100%;
`
