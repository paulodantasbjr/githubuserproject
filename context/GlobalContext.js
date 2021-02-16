import { createContext, useState, useEffect } from 'react'

const rootUrl = 'https://api.github.com'

const GlobalContext = createContext()

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [gitHubUser, setGitHubUser] = useState([])
  const [recentUser, setRecentUser] = useState([])

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        gitHubUser,
        setGitHubUser,
        recentUser,
        setRecentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GithubProvider }
