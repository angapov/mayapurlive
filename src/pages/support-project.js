import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SupportProject from '../components/support-project/SupportProject'
import PageSEO from '../components/seo'

import intl from '../intl'

const SupportProjectPage = ({ pageContext: { locale = intl.defaultLocale }, data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <PageSEO title={intl.support_project_title[locale]} lang={locale} />
      <SupportProject />
    </Layout>
  )
}

export default SupportProjectPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
