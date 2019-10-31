import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Calendar from '../components/calendar/Calendar'
import PageSEO from '../components/seo'

import intl from '../intl'

const CalendarPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title} showFooter={false}>
      <PageSEO title='Calendar' lang={locale} />
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
      }
    }
  }
`
