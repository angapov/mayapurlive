import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Events from '../components/events/Events'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const EventsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { events } = testData

  return (
    <Layout title={title}>
      <PageSEO title='Events' />
      <Events events={events} />
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
