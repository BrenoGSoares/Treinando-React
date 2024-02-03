import styled from 'styled-components'
import '../../index.css'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--primary-color-alt);
    border-radius: 1rem;
    padding: 3rem 4rem;
    color: var(--primary-color);
  }
`

export const ImgDecoration = styled.img`
  width: 40%;
  height: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;

  button {
    padding: 1rem 0;
    border-radius: 1rem;
    font-size: 1.25rem;
    font-family: 'Montserrat';
    text-transform: uppercase;
    color: var(--primary-color-alt);
    background-color: var(--primary-color);
  }
`

export const InputNumber = styled.input`
  box-sizing: border-box;
  font-size: 1.25rem;
  padding: 0.75rem 0.5rem;
  border: none;
  outline: none;
  border-bottom: var(--primary-color) 2px solid;
  border-radius: 0.3rem;
  margin-bottom: 1rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
