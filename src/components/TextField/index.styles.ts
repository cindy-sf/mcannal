import styled from 'styled-components'

export const Icon = styled.button`
  position: absolute;
  right: 0;
  bottom: 0.7rem;
  cursor: pointer;
  background: none;
  border: none;
` 

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  padding: 0.6rem;
  width: 100%;
  font-size: 2.4rem;

  ::placeholder {
    font-style: italic;
    color: #000;
  }

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`

export const InputWrapper = styled.div`
  width: 53.2rem;
  position: relative;
`
