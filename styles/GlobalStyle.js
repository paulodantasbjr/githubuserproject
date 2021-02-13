import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  --color-white: #fff;
  --color-black: #222;
  --color-gray: #fafafa;
  --color-primary: #8700FF;
  --color-secondary: #FF5500;
  --ff-primary: 'Roboto', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --transition: all 0.2s ease-in-out
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-primary)
  }
`

export default GlobalStyle
