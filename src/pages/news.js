import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import News from '../components/news/News'
import PageSEO from '../components/seo'

import intl from '../intl'

const NewsPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata
  return (
    <Layout title={title}>
      <PageSEO title={intl.news_title[locale]} lagn={locale} />
      <News />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
