import React from 'react'
import { kebabCase } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageSEO from '../components/seo'
import Tags from '../components/tags/Tags'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  const tags = group.map(tag => ({ value: tag.fieldValue, postsCount: tag.totalCount, path: `/tags/${kebabCase(tag.fieldValue)}/` }))
  return (
    (
      <Layout>
        <PageSEO title='Tags' />
        <Tags tags={tags} />
      </Layout>
    )
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery($locale: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, filter: { frontmatter: { locale: { eq: $locale } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
