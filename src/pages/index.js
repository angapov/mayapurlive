import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Home from '../components/home/Home'
import PageSEO from '../components/seo'

import intl from '../intl'
import { useIntlRedirect } from '../lib'

const IndexPage = ({ pageContext: { locale = intl.defaultLocale }, data: { allMarkdownRemark } }) => {
  useIntlRedirect(locale, intl.locales, intl.defaultLocale)
  const categories = allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  // NOTE: disabled chat, need to investigate some issues first
  return (
    // <Layout showChat={false}>
    <Layout showChat>
      <PageSEO title={intl.home_title[locale]} lang={locale} />
      <Home categories={categories} />
    </Layout>
  )
}

export default IndexPage
// FIXME: hardcoded default locale
export const pageQuery = graphql`
  query IndexPageQuery($locale: String = "en") {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "category" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
