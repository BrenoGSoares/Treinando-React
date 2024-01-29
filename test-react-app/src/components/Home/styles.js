import styled from 'styled-components'

export const Container = styled.div`
  background-color: #b752ff;
  padding: 20px;
  border-radius: 10px;

  h1 {
    font-family: 'Lucida Sans Unicode';
    color: #fff;
    text-transform: uppercase;
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }
`

export const AddButton = styled.button`
  background-color: #6cf000;
  color: #000;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 14.5%;

  &:hover {
    opacity: 0.8;
  }
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 10px;

  p {
    text-transform: capitalize;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
`
