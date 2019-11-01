import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'
import Forum from '../components/forum/Forum'
import intl from '../intl'

const ForumPage = ({ pageContext: { locale = intl.defaultLocale }, data: { site: { siteMetadata } } }) => {
  const { googleGroup } = siteMetadata.social

  return (
    <Layout>
      <PageSEO title={intl.forum_title[locale]} lang={locale} />
      <Forum forum={googleGroup} />
    </Layout>
  )
}

export default ForumPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social { googleGroup }
      }
    }
  }
`
