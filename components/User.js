import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Search from './Search'

const User = () => {
  const [user, setUser] = useState('')
  const [gitHubUser, setGitHubUser] = useState('')

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    setGitHubUser(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }
  return (
    <div>
      <Titulo>PROJETO: HUBusca</Titulo>
      <Search handleSubmit={handleSubmit} user={user} setUser={setUser} />
      {gitHubUser === '' ? (
        <EmptyUser>
          <h2>
            Segunda etapa do processo seletivo para vaga de Desenvolvedor
            Front-End
          </h2>
          <p>Pesquise um usuario no github para comecar sua jornada!</p>
        </EmptyUser>
      ) : (
        <WrapperUser>
          <Link href={`/user/${user}`}>
            <a>
              <ImagemConteiner>
                <img src={gitHubUser.avatar_url} alt={gitHubUser.name} />
              </ImagemConteiner>
            </a>
          </Link>
          <InfoBox>
            <h2>{gitHubUser.name}</h2>
            <span>{gitHubUser.login}</span>
            <p>{gitHubUser.location}</p>
          </InfoBox>
        </WrapperUser>
      )}
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
const EmptyUser = styled.div`
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

const WrapperUser = styled.div`
  margin: 20px 0;
  background: var(--color-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  display: flex;
  justify-content: space-around;
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
const ImagemConteiner = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-secondary);
    transition: var(--transition);
  }
  img {
    width: 100%;
    height: 100%;
  }
  img:hover {
    opacity: 0.8;
    transition: var(--transition);
  }
`
const InfoBox = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-transform: uppercase;
    color: var(--color-primary);
    letter-spacing: var(--spacing);
    font-weight: 2rem;
  }
  span {
    letter-spacing: var(--spacing);
    color: var(--color-secondary);
  }
  p {
    color: var(--color-black);
    font-style: italic;
    font-variant: small-caps;
  }
`
