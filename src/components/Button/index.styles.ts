import styled from 'styled-components'

export const StyledButton = styled.div<{ disabled: boolean }>`
  padding: 1rem 0.6rem;
  color: #fff;
  cursor: pointer;
  background-color: #0D10FF;
  border-radius: 2.6rem;
  width: 15rem;
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Poppins Medium', sans-serif;

  ${({ disabled }) => disabled && `
    border: 0.1rem solid;
    background-color: #B6B2B2;
  `}
`
