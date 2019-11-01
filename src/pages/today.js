import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Today from '../components/today/Today'
import PageSEO from '../components/seo'

import intl from '../intl'

const TodayPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title} showFooter={false}>
      <PageSEO title={intl.today_title[locale]} lang={locale} />
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
