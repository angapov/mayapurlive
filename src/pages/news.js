import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import News from '../components/news/News'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const NewsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { news } = testData

  return (
    <Layout title={title}>
      <PageSEO title='News' />
      <News news={news} />
    </Layout>
  )
}

export default NewsPage

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
