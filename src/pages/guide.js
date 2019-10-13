import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Guide from '../components/guide/Guide'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const GuidePage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { categories } = testData

  return (
    <Layout title={title}>
      <PageSEO title='Events' />
      <Guide categories={categories} />
    </Layout>
  )
}

export default GuidePage

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
