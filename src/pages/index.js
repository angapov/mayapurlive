import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Home from '../components/home/Home'
import PageSEO from '../components/seo'

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const categories = allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  return (
    <Layout>
      <PageSEO title='Home' />
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
