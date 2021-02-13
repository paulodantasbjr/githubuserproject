import styled from 'styled-components'
const EmptyRecent = () => {
  return (
    <div>
      <User>
        <h2>Recents</h2>
        <p>Você ainda não possui histórico de pesquisa.</p>
      </User>
    </div>
  )
}

export default EmptyRecent

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
