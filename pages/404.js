import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Desculpe, a página que você tentou acessar não existe.</h3>
        <Link href='/'>
          <Button>Voltar</Button>
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`
const Button = styled.button`
  text-transform: uppercase;
  width: 40%;
  padding: 20px;
  background-color: var(--clr-primary-4);
  color: var(--clr-primary-10);
  border: none;
  border-radius: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
  }
`
export default NotFound
