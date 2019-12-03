import React from 'react'
// import { kebabCase } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import { Box, DataTable, Meter } from 'grommet'
import Link from '../components/Link'

const Content = ({ posts, categories }) => {
  console.log(posts, categories)
  const publishedPercent = 100 * posts.filter(post => post.published).length / posts.length
  const [expandedGroups, setExpandedGroups] = React.useState(categories.map(category => category.title))
  const columns = [
    { header: 'Category', property: 'category.title' },
    { header: 'Title', property: 'title', render: post => post.path && <Link to={post.path}>{post.title}</Link> },
    { header: 'Published', property: 'published', render: post => post.published ? 'yes' : null }
  ]
  return (
    <Box fill flex>
      <Box fill pad='small'>
        <Meter size='full' type='circle' values={[{ value: publishedPercent, color: 'status-ok', label: '45%' }]} />
      </Box>
      <Box fill pad='small'>
        <DataTable
          columns={columns}
          data={posts}
          groupBy={{
            property: 'category.title',
            expand: expandedGroups,
            onExpand: setExpandedGroups
          }}
        />
      </Box>
    </Box>
  )
}

const ContentPage = ({
  data: {
    categoriesRemark,
    postsRemark,
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  const posts = postsRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug, category: { title: node.frontmatter.category.frontmatter.title, path: node.frontmatter.category.frontmatter.category_id } }))
  const categories = categoriesRemark.edges.map(({ node }) => ({ ...node.frontmatter, path: node.fields.slug }))
  return (
    (
      <Layout>
        <PageSEO title='Content' />
        <Content posts={posts} categories={categories} />
      </Layout>
    )
  )
}

export default ContentPage

export const contentPageQuery = graphql`
  query ContentQuery($locale: String) {
    site {
      siteMetadata {
        title
      }
    }
    categoriesRemark: allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___order], order: ASC }, filter: { frontmatter: { templateKey: { eq: "category" }, locale: { eq: $locale } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category_id
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
    postsRemark: allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___order], order: ASC }, filter: { frontmatter: { templateKey: { eq: "post" }, locale: { eq: $locale } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            published
            status
            tags
            gallery
            category { frontmatter { category_id, title } }
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
