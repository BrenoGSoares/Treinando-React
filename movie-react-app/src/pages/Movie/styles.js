import styled from 'styled-components'

export const MoviePage = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;

  svg {
    font-size: 1.5rem;
    color: #f7d354;
  }

  .movie-card {
    text-align: center;
  }

  .movie-card img,
  .movie-card h2 {
    margin-bottom: 1rem;
  }

  .movie-card h2 {
    font-size: 2rem;
  }

  .movie-card p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }
`

export const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`
export const Info = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  &.description {
    padding-bottom: 5rem;
  }
  &.description p {
    line-height: 1.4rem;
  }
`
