import styled from 'styled-components'

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem 0;

  .query-text {
    color: #f7d354;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  div {
    width: 30%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;
    border-radius: 10px;
  }

  div span {
    margin-left: 0.5rem;
  }

  div svg {
    color: #f7d354;
  }

  img {
    max-width: 100%;
  }

  img,
  h2,
  p {
    text-align: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  div a {
    background-color: #f7d354;
    border: 2px solid #f7d354;
    border-radius: 4px;
    color: #000;
    padding: 1rem 0.5rem;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }

  div a:hover {
    background-color: transparent;
    color: #f7d354;
  }
`
