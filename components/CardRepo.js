import styled from 'styled-components'
import Link from 'next/link'

const CardRepo = ({ dataRepo }) => {
  return dataRepo.map((repo) => (
    <Link href={repo.html_url} key={repo.id}>
      <a target='_blank'>
        <Card>
          <CardHeader>
            <h2>{repo.name}</h2>
          </CardHeader>
          <CardBody>
            <h3>{repo.language}</h3>
            <DateRepo>
              <Item>
                <span>data de criação</span>
                <p>{new Date(repo.created_at).toDateString()}</p>
              </Item>
              <Item>
                <span>data do último push</span>
                <p>{new Date(repo.pushed_at).toDateString()}</p>
              </Item>
              <Item>
                <span>Tamanho</span>
                <p>{repo.size} MB</p>
              </Item>
              <Item>
                <span>Forks</span>
                <p>{repo.forks}</p>
              </Item>
            </DateRepo>
          </CardBody>
          <CardFooter>
            <p>{repo.description}</p>
          </CardFooter>
        </Card>
      </a>
    </Link>
  ))
}

export default CardRepo

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  margin: 15px 10px;
  &:hover {
    transition: var(--transition);
    opacity: 0.8;
  }
`

const CardHeader = styled.div`
  text-transform: capitalize;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding: 5px;
  background-color: var(--color-primary);
  h2 {
    margin: 0;
    letter-spacing: var(--spacing);
    font-weight: bolder;
    color: var(--color-white);
    @media (max-width: 640px) {
      font-size: 12px;
      padding: 5px;
    }
  }
`
const CardBody = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  h3 {
    font-size: 16px;
    margin: 10px 0;
    letter-spacing: var(--spacing);
    font-weight: 600;
    color: var(--color-secondary);
  }
  span {
    font-size: 14px;
    margin: 10px 0;
    letter-spacing: var(--spacing);
    font-weight: 600;
    color: var(--color-black);
    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
`
const DateRepo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }
  p {
    margin: 2px 0 10px 0;
    overflow: hidden;
    font-size: 12px;
    letter-spacing: var(--spacing);
    font-weight: 300;
    color: var(--color-black);
    @media (max-width: 640px) {
      font-size: 11px;
    }
  }
`

const CardFooter = styled.div`
  p {
    overflow: hidden;
    letter-spacing: var(--spacing);
    color: var(--color-primary);
    padding: 10px;
    @media (max-width: 640px) {
      padding: 10px;
      font-size: 12px;
    }
  }
`
