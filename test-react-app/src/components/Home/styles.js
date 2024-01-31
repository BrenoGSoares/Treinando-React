import styled from 'styled-components'

export const Container = styled.div`
  background-color: #32c2b9;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 10px;
  }
`

export const AddButton = styled.button`
  background-color: #fad928;
  color: #000;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 15px;

  &:hover {
    opacity: 0.8;
  }
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 5px 10px;

  p {
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 200;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }

  div {
    width: 4rem;
    display: flex;
    justify-content: space-between;
  }
`

export const Option = styled.button`
  &:hover {
    padding: 4px 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const ErrorSignal = styled.p`
  color: #ffffff;
  background-color: #ff0000;
  padding: 0.5;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`
