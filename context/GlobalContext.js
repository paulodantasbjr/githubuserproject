import { createContext, useState } from 'react'

const GlobalContext = createContext()

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [gitHubUser, setGitHubUser] = useState([])
  const [recentUser, setRecentUser] = useState([])
  const [dataRepo, setDataRepo] = useState([])

  const fetchUser = async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    if (res.status === 404) {
      alert('Usuario nao existe')
    } else {
      const data = await res.json()
      setGitHubUser(data)
      setRecentUser([...recentUser, data])
    }
  }
  const fetchRepo = async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await res.json()
    setDataRepo(data)
  }

  return (
    <GlobalContext.Provider
      value={{
        user,
        gitHubUser,
        recentUser,
        dataRepo,
        setUser,
        setGitHubUser,
        setRecentUser,
        fetchUser,
        setDataRepo,
        fetchRepo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GithubProvider }
