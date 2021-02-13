import styled from 'styled-components'

const EmptyUser = () => {
  return (
    <User>
      <h2>
        Segunda etapa do processo seletivo para vaga de Desenvolvedor Front-End
      </h2>
      <p>Pesquise um usuario no github para comecar sua jornada!</p>
    </User>
  )
}

export default EmptyUser

const User = styled.div`
  margin: 20px 0;
  background: var(--color-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 20px;
    letter-spacing: var(--spacing);
    text-align: center;
  }
  p {
    text-align: center;
    font-style: italic;
    font-variant: small-caps;
  }
`
