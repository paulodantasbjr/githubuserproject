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
  const [local, setLocal] = useState('')

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
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
    localStorage.setItem('users', JSON.stringify(user))
  }

  useEffect(() => {
    const getStorage = localStorage.getItem('users')
    if (getStorage) {
      setLocal(getStorage)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
    setUser([])
  }
  return (
    <>
      <Titulo>PROJETO: HUBusca</Titulo>
      <Search handleSubmit={handleSubmit} user={user} setUser={setUser} />
      {gitHubUser === '' ? <EmptyUser /> : <CardUser gitHubUser={gitHubUser} />}
      {local === null ? <EmptyRecent /> : <Recent user={local} />}
    </>
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
