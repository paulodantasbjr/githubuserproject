import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/Theme'
import { GithubProvider } from '../context/GlobalContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GithubProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GithubProvider>
    </>
  )
}
