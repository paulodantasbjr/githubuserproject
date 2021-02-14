import { useContext, useState, useEffect } from 'react'
import EmptyUser from './EmptyUser'
import CardUser from '../components/CardUser'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'
import Search from './Search'
import Recent from './Recent'
import EmptyRecent from './EmptyRecent'

const User = () => {
  const { user, setUser, gitHubUser, setGitHubUser } = useContext(GlobalContext)
  const [local, setLocal] = useState([])

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    if (res.status === 404) {
      alert('Usuario nao existe')
    } else {
      const data = await res.json()
      setGitHubUser(data)
      if (localStorage.getItem('users') === null) {
        localStorage.setItem('users', JSON.stringify([user]))
      } else {
        localStorage.setItem(
          'users',
          JSON.stringify([...JSON.parse(localStorage.getItem('users')), user])
        )
      }
    }
  }
  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem('users'))
    if (getStorage) {
      setLocal(getStorage)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }
  const handleClear = () => {
    localStorage.removeItem('users')
    window.location.reload()
  }

  return (
    <>
      <Titulo>PROJETO: HUBusca</Titulo>
      <Search handleSubmit={handleSubmit} user={user} setUser={setUser} />
      {gitHubUser.length === 0 ? (
        <EmptyUser />
      ) : (
        <CardUser gitHubUser={gitHubUser} />
      )}
      <Wrapper>
        <Info>
          <h2>Recentes</h2>
          <Button onClick={handleClear}>Limpar</Button>
        </Info>
        <Container>
          {local.length === 0 ? <EmptyRecent /> : <Recent user={local} />}
        </Container>
      </Wrapper>
    </>
  )
}

export default User

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary);
  border-radius: var(--radius);
`
const Info = styled.div`
  padding: 5px;
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: var(--color-white);
    margin: 0;
    @media (max-width: 640px) {
      font-size: 18px;
    }
  }
`
const Container = styled.div`
  max-height: 400px;
  padding: 10px;
  overflow: scroll;
`
const Button = styled.button`
  border-radius: 5px;
  border-color: transparent;
  outline: none;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  background: var(--color-primary);
  color: var(--color-white);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
    background-color: transparent;
    border: 2px solid var(--color-primary);
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
`

const Titulo = styled.h1`
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 2px;
  font-weight: 2rem;
`
