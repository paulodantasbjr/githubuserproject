import { useEffect, useState } from 'react'
import { typeOf } from 'react-is'
import CardUser from './CardUser'

const Recent = ({ user }) => {
  const [userLocal, setUserLocal] = useState('')

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    setUserLocal(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(userLocal)
  return <div>oi</div>
}

export default Recent
