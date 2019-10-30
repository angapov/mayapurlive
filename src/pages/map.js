import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Map from '../components/map/Map'
import PageSEO from '../components/seo'

const MapPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({ id: node.id, ...node.frontmatter, path: node.fields.slug }))

  return (
    <Layout title={title} showFooter={false}>
      <PageSEO title='Map' />
      <Map posts={posts} />
    </Layout>
  )
}

export default MapPage

export const pageQuery = graphql`
  query MapQuery($locale: String = "en") {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { templateKey: { eq: "post" }, locale: { eq: $locale } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            location
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
