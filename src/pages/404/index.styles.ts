import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Poppins Medium', sans-serif;
  background-color: #090DE8;
  width: 16rem; 
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.space.large};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space.large};
  align-items: center;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.large};
  max-width: 50rem;
`
