import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = ({ handleSubmit, user, setUser }) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <AiOutlineSearch />
          <input
            type='text'
            placeholder='Entre com o nome de usuario'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button type='submit'>search</button>
        </FormControl>
      </form>
    </Wrapper>
  )
}

export default Search

const Wrapper = styled.div``

const FormControl = styled.div`
  background: var(--color-gray);
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  input {
    border-color: transparent;
    outline: none;
    outline-color: var(--color-black);
    letter-spacing: var(--spacing);
    color: var(--clr-black);
    padding: 0.25rem 0.5rem;
  }
  input::placeholder {
    opacity: 0.6;
    font-weight: 300;
    color: var(--color-black);
    letter-spacing: var(--spacing);
  }
  button {
    border-radius: 5px;
    border-color: transparent;
    outline: none;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--color-secondary);
    color: var(--color-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      color: var(--color-primary);
      background-color: transparent;
      border: 2px solid var(--color-primary);
    }
  }
`
