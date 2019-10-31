import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import InDevelopment from '../components/InDevelopment'

const ShopPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title='Shop' />
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
