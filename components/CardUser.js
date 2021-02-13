import styled from 'styled-components'
import Link from 'next/link'

const CardUser = ({ gitHubUser }) => {
  return (
    <WrapperUser>
      <Link href={`/user/${gitHubUser.login}`}>
        <a>
          <ImagemContainer>
            <img src={gitHubUser.avatar_url} alt={gitHubUser.name} />
          </ImagemContainer>
        </a>
      </Link>
      <InfoBox>
        <h2>{gitHubUser.name}</h2>
        <span>{gitHubUser.login}</span>
        <p>{gitHubUser.location}</p>
      </InfoBox>
    </WrapperUser>
  )
}

export default CardUser

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
const ImagemContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    box-shadow: var(--box-shadow);
  }
  img {
    width: 100%;
    height: 100%;
    transition: var(--transition);
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
