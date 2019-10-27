import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'
import Forum from '../components/forum/Forum'
// import InDevelopment from '../components/InDevelopment'

const ForumPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title='Forum' />
      {/* <InDevelopment /> */}
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
        postPrefix
      }
    }
  }
`
