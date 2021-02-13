import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  --color-white: #fff;
  --color-black: #222;
  --color-gray: #fafafa;
  --color-primary: #593891;
  --color-secondary: #01afad;
  --ff-primary: 'Raleway', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;
  --spacing: 0.1rem;
  --box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  --radius: 0.25rem;
  --transition: all 0.2s ease-in-out
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    a{
    text-decoration:none;
    }
    h6{
      margin:0;
      padding:0;
    }
  }

`

export default GlobalStyle
