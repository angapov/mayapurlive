import React from 'react'
import { Box, Grommet } from 'grommet'
import { dark } from 'grommet/themes'

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

export default ({ children, showFooter = true, showChat = false }) => (
  <Grommet full theme={dark}>
    <GlobalStyle />
    <Box fill style={{ minHeight: '100vh' }}>
      <Header />
      <Box as='main' flex>
        {children}
      </Box>
      {showFooter && <Footer />}
      {showChat && <Chat />}
    </Box>
  </Grommet>
)