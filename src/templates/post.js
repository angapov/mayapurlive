import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const BlogPost = ({ pageContext: { locale }, data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout locale={locale}>
      <Seo title='SEO Title Home' />
      <h1>title: {post.frontmatter.title}</h1>
      <p>description: {post.frontmatter.description}</p>
      <p>date: {post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
