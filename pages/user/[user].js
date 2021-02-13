import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CardRepo from '../../components/CardRepo'
import styled from 'styled-components'

const info = () => {
  const [dataUser, setDataUser] = useState('')
  const [dataRepo, setDataRepo] = useState([])
  const router = useRouter()
  const { user } = router.query

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    setDataUser(data)
  }
  const fetchRepo = async () => {
    const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await res.json()
    setDataRepo(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])
  useEffect(() => {
    fetchRepo()
  }, [])

  return (
    <Wrapper>
      <Titulo>PROJETO: HUBusca</Titulo>
      <Conteiner>
        <img src={dataUser.avatar_url} alt={dataUser.name} />
        <User>
          <span>
            #:{dataUser.id} - {dataUser.name}
          </span>
          <p>{dataUser.login}</p>
          <blockquote>{dataUser.location}</blockquote>
          <Number>
            <div>
              <small>{dataUser.followers}</small>
              <small>{dataUser.following}</small>
              <small>{dataUser.public_repos}</small>
            </div>
            <div>
              <h6>Seguidores</h6>
              <h6>Seguindo</h6>
              <h6>Repo</h6>
            </div>
          </Number>
        </User>
        <Repositories>
          <CardRepo dataRepo={dataRepo} />
        </Repositories>
      </Conteiner>
      <Link href='/'>
        <Button>Pesquisar novamente</Button>
      </Link>
    </Wrapper>
  )
}

export default info

const Titulo = styled.h1`
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 2px;
  font-weight: 2rem;
`

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Conteiner = styled.div`
  background-color: var(--color-white);
  height: 500px;
  width: 500px;
  border-radius: var(--radius);
  display: flex;
  position: relative;
  img {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
  }
`

const User = styled.div`
  background-color: var(--color-gray);
  max-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  span {
    font-weight: bolder;
    text-align: center;
    letter-spacing: var(--spacing);
  }
  p {
    text-align: center;
    letter-spacing: var(--spacing);
    font-weight: 300;
    color: var(--color-secondary);
  }
  blockquote {
    margin: 0;
    font-size: 12px;
    padding: 5px;
    margin-bottom: 5px;
    color: var(--color-black);
    text-align: center;
    font-style: italic;
    font-variant: small-caps;
  }
  small {
    height: min-content;
    color: var(--color-primary);
    font-weight: 300;
    text-align: center;
  }
`

const Number = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
  }
`

const Repositories = styled.div`
  background-color: var(--color-gray);
  width: 350px;
  overflow: scroll;
`
const Button = styled.button`
  margin: 20px;
  border: 2px solid transparent;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  width: 40%;
  padding: 10px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  letter-spacing: var(--spacing);
  border-radius: 10px;
  transition: var(--transition);
  &:hover {
    transition: var(--transition);
    color: var(--color-secondary);
    background-color: transparent;
    border: 2px solid var(--color-secondary);
  }
`
