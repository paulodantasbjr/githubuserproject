import styled from 'styled-components'
const EmptyRecent = () => {
  return (
    <User>
      <h2>Você ainda não possui histórico de pesquisa.</h2>
    </User>
  )
}

export default EmptyRecent

const User = styled.div`
  height: 170px;
  margin: 20px 0;
  background: var(--color-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 24px;
    letter-spacing: var(--spacing);
    text-align: center;
    @media (max-width: 640px) {
      font-size: 18px;
    }
  }
`
