import { useContext } from 'react'
import EmptyUser from './EmptyUser'
import CardUser from '../components/CardUser'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'
import Search from './Search'
import Recent from './Recent'

const User = () => {
  const { user, setUser, gitHubUser, setGitHubUser } = useContext(GlobalContext)

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    setGitHubUser(data)
    localStorage.setItem('users', JSON.stringify(user))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
    setUser([])
  }
  return (
    <div>
      <Titulo>PROJETO: HUBusca</Titulo>
      <Search handleSubmit={handleSubmit} user={user} setUser={setUser} />
      {gitHubUser === '' ? <EmptyUser /> : <CardUser gitHubUser={gitHubUser} />}
      <Recent />
    </div>
  )
}

export default User

const Titulo = styled.h1`
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 2px;
  font-weight: 2rem;
`
