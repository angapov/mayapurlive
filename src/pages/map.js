import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Map from '../components/map/Map'
import PageSEO from '../components/seo'

const MapPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const posts = data.posts.edges.map(({ node }) => ({ id: node.id, ...node.frontmatter, path: node.fields.slug, category: node.frontmatter.category.frontmatter }))
  const categories = data.categories.edges.map(({ node }) => ({ path: node.fields.slug, ...node.frontmatter }))
  return (
    <Layout title={title} showFooter={false}>
      <PageSEO title='Map' />
      <Map posts={posts} categories={categories} />
    </Layout>
  )
}

export default MapPage

export const pageQuery = graphql`
  query MapQuery($locale: String = "en") {
    site {
      siteMetadata {
        title
      }
    }
    categories: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {
        frontmatter: { templateKey: { eq: "category" }, locale: { eq: $locale } }
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
          }
        }
      }
    }
    posts: allMarkdownRemark(
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
            category { frontmatter { title } }
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
