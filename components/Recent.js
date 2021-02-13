import { useEffect, useState } from 'react'
import CardUser from './CardUser'

const Recent = ({ user }) => {
  const [gitHubUser, setGitHubUser] = useState('')

  useEffect(() => {
    const local = localStorage.getItem('users')
    setGitHubUser(local)
  }, [])

  console.log(gitHubUser)

  return <div>full</div>
}

export default Recent
