import React from 'react'
import { Box } from 'grommet'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import intl from '../intl'

const ToVP360Page = ({ pageContext: { locale = intl.defaultLocale } }) => {
  return (
    <Layout>
      <PageSEO title='ToVP 360' lang={locale} />
      <Box flex><iframe style={{ height: '100%', width: '100%', flex: '1 1 auto' }} allowFullscreen frameBorder='0' scrolling='no' src='https://www.tovp360.org/virtual-tour/' /></Box>
    </Layout>
  )
}

export default ToVP360Page
