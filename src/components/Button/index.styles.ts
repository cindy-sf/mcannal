import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 1rem 0.6rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.radius.medium};
  width: 15rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-family: 'Poppins Medium', sans-serif;
`
