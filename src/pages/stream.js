import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import Stream from '../components/stream/Stream'

import intl from '../intl'

const CalendarPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title={intl.stream_title[locale]} lang={locale} />
      <Stream />
    </Layout>
  )
}

export default CalendarPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
