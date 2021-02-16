import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import CardUser from './CardUser'

const Recent = ({ user }) => {
  const { recentUser } = useContext(GlobalContext)

  return (
    <>
      {recentUser.map((r, index) => (
        <CardUser key={index} gitHubUser={r} />
      ))}
    </>
  )
}

export default Recent
