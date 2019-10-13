import React from 'react'
import { Box, Grommet } from 'grommet'
import { dark } from 'grommet/themes'

import Footer from './Footer'
import Header from './Header'

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

export default ({ children, showFooter = true, showChat = true }) => (
  <Grommet full theme={dark}>
    <GlobalStyle />
    <Box flex style={{ minHeight: '100vh' }}>
      <Header />
      <Box as='main' flex>
        {children}
      </Box>
      {showFooter && <Footer />}
    </Box>
  </Grommet>
)
