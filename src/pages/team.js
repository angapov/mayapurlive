import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Team from '../components/team/Team'
import PageSEO from '../components/seo'

import intl from '../intl'

const TeamPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title={intl.footer_project_team[locale]} lang={locale} />
      <Team />
    </Layout>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
