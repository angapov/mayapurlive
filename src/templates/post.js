import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/posts/Post'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const PostPage = ({ pageContext: { locale }, data: { markdownRemark } }) => {
  const post = { htmlAst: markdownRemark.htmlAst, ...markdownRemark.frontmatter }
  return (
    <Layout locale={locale}>
      <Seo title={post.title} />
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
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
