import { useEffect, useState } from 'react'
import CardUser from './CardUser'

const Recent = ({ user }) => {
  const [userLocal, setUserLocal] = useState([])

  const fetchData = async () => {
    user.map(async (re) => {
      const res = await fetch(`https://api.github.com/users/${re}`)
      const data = await res.json()
      setUserLocal({ ...userLocal, data })
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {user.map((r, index) => (
        <CardUser key={index} gitHubUser={userLocal.data} />
      ))}
    </>
  )
}

export default Recent
