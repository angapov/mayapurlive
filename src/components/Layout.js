import React from 'react'
import { Box, Grommet } from 'grommet'
import { dark } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

import Footer from './Footer'
import Header from './Header'
import Chat from './Chat'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    box-shadow: none;
  }
`

const customTheme = deepMerge(dark, {
  global: {
    colors: {
      brand: 'control'
    },
    active: {
      background: {
        color: { dark: 'control' }
      }
    }
  }
})

console.log('theme', customTheme)

export default ({ children, showFooter = true, showChat = false }) => (
  <Grommet full theme={customTheme}>
    <GlobalStyle />
    <Box flex style={{ minHeight: '100vh' }}>
      <Header />
      <Box as='main' flex>
        {children}
      </Box>
      {showFooter && <Footer />}
      {showChat && <Chat />}
    </Box>
  </Grommet>
)
