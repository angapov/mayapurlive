import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'
import Forum from '../components/forum/Forum'
import intl from '../intl'

const ForumPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title='Forum' lang={locale} />
      <Forum />
    </Layout>
  )
}

export default ForumPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
