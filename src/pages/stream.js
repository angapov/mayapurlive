import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import InDevelopment from '../components/InDevelopment'

const CalendarPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title='Stream' />
      <InDevelopment />
    </Layout>
  )
}

export default CalendarPage

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
