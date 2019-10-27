import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Calendar from '../components/calendar/Calendar'
import PageSEO from '../components/seo'

const CalendarPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title='Calendar' />
      <Calendar />
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
