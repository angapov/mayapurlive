import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Today from '../components/today/Today'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const TodayPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { today } = testData

  return (
    <Layout title={title}>
      <PageSEO title='Today' />
      <Today today={today} />
    </Layout>
  )
}

export default TodayPage

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
