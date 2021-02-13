import { createContext, useState, useEffect } from 'react'

const rootUrl = 'https://api.github.com'

const GlobalContext = createContext()

const GithubProvider = ({ children }) => {
  const [gitHubUser, setGitHubUser] = useState([])
  const [gitHubRepos, setGitHubRepos] = useState([])

  return (
    <GlobalContext.Provider
      value={{ gitHubUser, gitHubRepos, setGitHubUser, setGitHubRepos }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GithubProvider }
