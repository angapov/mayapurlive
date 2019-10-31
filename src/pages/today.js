import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Today from '../components/today/Today'
import PageSEO from '../components/seo'

const TodayPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title} showFooter={false}>
      <PageSEO title='Today' />
      <Today />
    </Layout>
  )
}

export default TodayPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
