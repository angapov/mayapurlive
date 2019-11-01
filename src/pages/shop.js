import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import InDevelopment from '../components/InDevelopment'

import intl from '../intl'

const ShopPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title={intl.shop_title[locale]} lang={locale} />
      <InDevelopment />
    </Layout>
  )
}

export default ShopPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
