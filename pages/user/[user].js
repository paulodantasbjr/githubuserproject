import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CardRepo from '../../components/CardRepo'
import styled from 'styled-components'

const info = () => {
  const { gitHubUser } = useContext(GlobalContext)

  const [dataRepo, setDataRepo] = useState([])
  const router = useRouter()

  const { user } = router.query

  const fetchRepo = async () => {
    const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await res.json()
    setDataRepo(data)
  }

  useEffect(() => {
    fetchRepo()
  }, [])

  return (
    <Wrapper>
      <Titulo>PROJETO: HUBusca</Titulo>
      <Conteiner>
        <img src={gitHubUser.avatar_url} alt={gitHubUser.name} />
        <User>
          <span>
            #:{gitHubUser.id} - {gitHubUser.name}
          </span>
          <p>{gitHubUser.login}</p>
          <blockquote>{gitHubUser.location}</blockquote>
          <Number>
            <DataNumber>
              <small>{gitHubUser.followers}</small>
              <small>{gitHubUser.following}</small>
              <small>{gitHubUser.public_repos}</small>
            </DataNumber>
            <TituloNumber>
              <h6>Seguidores</h6>
              <h6>Seguindo</h6>
              <h6>Repo</h6>
            </TituloNumber>
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
    @media (max-width: 640px) {
      display: none;
    }
  }
  @media (max-width: 640px) {
    width: 350px;
  }
`

const User = styled.div`
  background-color: var(--color-gray);
  max-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  span {
    font-weight: bolder;
    text-align: center;
    letter-spacing: var(--spacing);
    @media (max-width: 640px) {
      max-width: 120px;
      font-size: 13px;
    }
  }
  p {
    text-align: center;
    letter-spacing: var(--spacing);
    font-weight: 300;
    color: var(--color-secondary);
    @media (max-width: 640px) {
      font-size: 12px;
    }
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
    @media (max-width: 640px) {
      font-size: 11px;
    }
  }
  small {
    height: min-content;
    color: var(--color-primary);
    font-weight: 300;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 11px;
    }
  }
`

const Number = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    flex-direction: row;
    font-size: 11px;
  }
`
const DataNumber = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 8px;
  @media (max-width: 640px) {
    max-width: min-content;
    flex-direction: column;
    justify-content: flex-end;
  }
`
const TituloNumber = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    max-width: min-content;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    h6 {
      font-size: 9px;
      margin: 2px;
    }
  }
`

const Repositories = styled.div`
  background-color: var(--color-gray);
  overflow: scroll;
  width: 800px;
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
  max-width: 250px;
  &:hover {
    transition: var(--transition);
    color: var(--color-secondary);
    background-color: transparent;
    border: 2px solid var(--color-secondary);
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
`
