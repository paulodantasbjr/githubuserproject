import { useEffect, useState } from 'react'
import Head from 'next/head'
import User from '../components/User'
import styled from 'styled-components'
import CardUser from '../components/CardUser'

const index = () => {
  const [recent, setRecent] = useState([])

  const gitHubUser = async (users) => {
    const res = await fetch(`https://api.github.com/users/${users}`)
    const data = await res.json()
    return data
  }

  return (
    <>
      <Head>
        <title>PROJETO: HUBusca</title>
      </Head>
      <Main>
        <Wrapper>
          <User />
        </Wrapper>
      </Main>
    </>
  )
}

export default index

const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`
