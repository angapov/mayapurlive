import React from 'react'
import { graphql } from 'gatsby'

import { Box, Heading, Text } from 'grommet'

import Layout from '../components/Layout'
import PageSEO from '../components/seo'

const NotFoundPage = (props) => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <PageSEO title='404: Not Found' />
      <Box fill flex align='center' justify='center'>
        <Heading level={1}>Error 404: The Page Not Found</Heading>
        <Text weight='bold'>Sorry! We can't find the page you are looking for.</Text>
      </Box>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
