import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Home from '../components/home/Home'
import PageSEO from '../components/seo'

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const categories = allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  console.log('categories', categories)
  return (
    <Layout>
      <PageSEO title='Guide' />
      <Home categories={categories} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery($locale: String) {
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
