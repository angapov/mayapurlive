import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SupportProject from '../components/support-project/SupportProject'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const EventsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { supportProject } = testData

  return (
    <Layout title={title}>
      <PageSEO title='Team' />
      <SupportProject supportProject={supportProject} />
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
