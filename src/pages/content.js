import React from 'react'
import { Box } from 'grommet'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import intl from '../intl'

const ToVP360Page = ({ pageContext: { locale = intl.defaultLocale } }) => {
  return (
    <Layout>
      <PageSEO title='Content' lang={locale} />
      <Box flex>
        <iframe
          style={{ height: '100%', width: '100%', flex: '1 1 auto' }}
          allowFullscreen
          frameBorder='0'
          scrolling='no'
          src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS1EcQu0XmAdB-0bc0UTXurRK8dog_iSfXbZ1Ji2L0NxMV7To3qstC4_SqX2shZKjRdbFBNDUnFxQmJ/pubhtml?widget=true&headers=false&chrome=false'
        />
      </Box>
    </Layout>
  )
}

export default ToVP360Page
