import React from 'react'
import { Box, Grommet } from 'grommet'
import { dark } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

import Footer from './Footer'
import Header from './Header'
import Chat from './Chat'

import { createGlobalStyle } from 'styled-components'
import { FacebookProvider } from 'react-facebook'

import { useLocale } from '../lib'

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
  .pigeon-map-overlay {
    z-index: 1000;
  }
  .header-autolink {
    fill: #FFCA58;
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
  },
  tab: {
    color: 'control',
    active: {
      color: 'text'
    },
    border: null
  }
})

export default ({ children, showFooter = true, showChat = true }) => {
  const facebookAppId = '610493882762259' // FIXME: remove hardcode
  const locale = useLocale()
  return (
    <Grommet full theme={customTheme}>
      <GlobalStyle />
      <FacebookProvider chatSupport={showChat} wait={false} appId={facebookAppId} language={`${locale}_${locale.toUpperCase()}`}>
        <Box flex style={{ minHeight: '100vh' }}>
          <Box style={{ zIndex: 1, position: 'sticky', top: 0 }} fill='horizontal'><Header /></Box>
          <Box as='main' flex>
            {children}
          </Box>
          {showFooter && <Footer />}
          {showChat && <Chat />}
        </Box>
      </FacebookProvider>
    </Grommet>
  )
}
