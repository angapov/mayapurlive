import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Team from '../components/team/Team'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const EventsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { team } = testData

  return (
    <Layout title={title}>
      <PageSEO title='Team' />
      <Team team={team} />
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
