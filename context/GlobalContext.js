import { createContext, useState, useEffect } from 'react'

const rootUrl = 'https://api.github.com'

const GlobalContext = createContext()

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [gitHubUser, setGitHubUser] = useState('')

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
    setGitHubUser(data)
    localStorage.setItem(
      'users',
      user === '' ? JSON.stringify([]) : JSON.stringify(user)
    )
  }

  return (
    <GlobalContext.Provider
      value={{ user, setUser, gitHubUser, setGitHubUser }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GithubProvider }
