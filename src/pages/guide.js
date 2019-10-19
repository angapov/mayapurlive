import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Guide from '../components/guide/Guide'
import PageSEO from '../components/seo'

const GuidePage = ({ data: { allMarkdownRemark } }) => {
  const categories = allMarkdownRemark.edges.map(({ node }) => ({ title: node.frontmatter.title, path: node.fields.slug }))
  console.log('categories', categories)
  return (
    <Layout>
      <PageSEO title='Guide' />
      <Guide categories={categories} />
    </Layout>
  )
}

export default GuidePage

export const pageQuery = graphql`
  query GuidePageQuery($locale: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
          }
        }
      }
    }
  }
`
