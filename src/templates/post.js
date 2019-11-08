import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/posts/Post'
import Layout from '../components/Layout'
import PageSEO from '../components/seo'

const PostPage = ({ pageContext: { locale }, data: { markdownRemark } }) => {
  const post = { htmlAst: markdownRemark.htmlAst, ...markdownRemark.frontmatter, category: { path: markdownRemark.frontmatter.category.frontmatter.category_id } }
  const ogImagePath = post.image && post.image.childImageSharp.fixed.src
  return (
    <Layout>
      <PageSEO title={post.title} lang={locale} image={ogImagePath} />
      <Post post={post} />
    </Layout>
  )
}

export default PostPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        gallery
        category { frontmatter { category_id } }
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            },
            fixed {
              src
            }
          }
        }
        description
      }
    }
  }
`
