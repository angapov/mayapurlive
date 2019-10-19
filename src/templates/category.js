import React from 'react'
import { graphql } from 'gatsby'
import Category from '../components/posts/Category'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const CategoryPage = ({ pageContext: { locale }, data: { markdownRemark } }) => {
  const category = { htmlAst: markdownRemark.htmlAst, ...markdownRemark.frontmatter }
  return (
    <Layout locale={locale}>
      <Seo title={category.title} />
      <Category category={category} />
    </Layout>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query CategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
