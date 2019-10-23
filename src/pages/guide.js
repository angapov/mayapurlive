import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Guide from '../components/guide/Guide'
import PageSEO from '../components/seo'

const HomePage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  console.log('posts', posts)

  return (
    <Layout title={title}>
      <PageSEO title='Home' />
      <Guide posts={posts} />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
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
        # fileAbsolutePath: {regex: "/(\/content\/posts)/.*$/"},
        frontmatter: { templateKey: { eq: "post" }, category: { frontmatter: { category_id: { eq: "/ru/holy-places/" } } } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
