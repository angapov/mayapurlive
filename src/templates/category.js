import React from 'react'
import { graphql } from 'gatsby'
import Category from '../components/posts/Category'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const CategoryPage = ({ pageContext: { locale, slug }, data: { markdownRemark, allMarkdownRemark } }) => {
  const posts = allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  const category = { htmlAst: markdownRemark.htmlAst, ...markdownRemark.frontmatter, posts }
  return (
    <Layout locale={locale}>
      <Seo title={category.title} />
      <Category category={category} />
    </Layout>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query CategoryByID($id: String!, $slug: String) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { templateKey: { eq: "post" }, category: { frontmatter: { category_id: { eq: $slug } } } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
