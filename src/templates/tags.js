import React from 'react'
import { graphql } from 'gatsby'
import Tag from '../components/tags/Tag'
import Layout from '../components/Layout'
import PageSEO from '../components/seo'

const TagPage = ({ pageContext: { locale, tag }, data: { markdownRemark, allMarkdownRemark } }) => {
  const posts = allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  return (
    <Layout>
      <PageSEO title={tag} lang={locale} />
      <Tag tag={tag} posts={posts} />
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query TagPageQuery($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "post" }, tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
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
