import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Search from '../components/search/Search'
import PageSEO from '../components/seo'

const EventsPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title='Search' />
      <Search />
    </Layout>
  )
}

export default EventsPage

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
