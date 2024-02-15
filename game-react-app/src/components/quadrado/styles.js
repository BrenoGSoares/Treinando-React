import styled from 'styled-components'

export const Quadro = styled.button`
  background: var(--primary-color-alt);
  color: var(--primary-color);
  border: var(--primary-color) 3px solid;
  font-size: 4rem;
  font-weight: bold;
  height: 10rem;
  width: 10rem;
  outline: none;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Linha = styled.div`
  display: flex;
  justify-content: center;
`
export const Status = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--primary-color-alt);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
