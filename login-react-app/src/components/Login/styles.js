import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  gap: 10rem;
  align-items: center;
`

export const SecundaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Montserrat';
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    color: var(--primary-color-alt);
    margin-bottom: 2rem;
  }
`

export const ListButton = styled.ul`
  display: flex;
  gap: 3rem;
  font-family: 'Montserrat';
  justify-content: center;

  li {
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    color: var(--primary-color);
    background-color: var(--primary-color-alt);
    cursor: pointer;
  }
`

export const ImgLogin = styled.img`
  height: 100vh;
  width: 45vw;
  border-radius: 0 3rem 3rem 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  input {
    font-size: 1rem;
    font-family: 'Montserrat';
    padding: 1rem 2rem;
    width: 15rem;
    background: none;
    border: none;
    border-bottom: var(--primary-color-alt) 1.5px solid;
    outline: none;
    color: var(--primary-color-alt);
  }
  button {
    width: 19rem;
    padding: 1rem 2rem;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1rem;
    border: none;
    color: var(--primary-color);
    background-color: var(--primary-color-alt);
  }
`
