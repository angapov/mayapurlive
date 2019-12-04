import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageSEO from '../components/seo'

import { Box, DataTable, Meter, Stack, Text } from 'grommet'
import { StatusGoodSmall, StatusDisabled, StatusWarning } from 'grommet-icons'
import Link from '../components/Link'
import Image from '../components/Image'
import { useLocale } from '../lib'

import intl from '../intl'

const getPublishedStats = posts => {
  const publishedCount = posts.filter(post => post.published).length
  const publishedPercent = parseInt(100 * publishedCount / posts.length)
  return { publishedCount, publishedPercent }
}

const CategoryPublishedMeter = ({ posts }) => {
  const { publishedCount, publishedPercent } = getPublishedStats(posts)
  return (
    <Stack anchor='center'>
      <Box fill><Meter size='full' values={[{ value: publishedPercent, color: 'status-ok' }]} /></Box>
      <Box pad='small' fill align='center' justify='center' direction='row' background={{ color: 'black', opacity: 'medium' }} gap='xsmall'>
        <Box align='center' justify='center' direction='row' gap='xxsmall'><Text size='large' weight='bold'>{publishedPercent}</Text><Text size='small'>%</Text></Box>
        <Box align='center' justify='center'><Text size='small'>+{publishedCount} / {posts.length} / -{posts.length - publishedCount}</Text></Box>
      </Box>
    </Stack>
  )
}

const Content = ({ posts, categories }) => {
  console.log(posts, categories)
  const locale = useLocale()
  const categoriesByTitle = categories.reduce((obj, cat) => {
    obj[cat.title] = cat
    return obj
  }, {})
  const postsByCategoryTitle = categories.reduce((obj, cat) => {
    obj[cat.title] = posts.filter(post => post.category.title === cat.title)
    return obj
  }, {})
  const { publishedCount, publishedPercent } = getPublishedStats(posts)
  // const [expandedGroups, setExpandedGroups] = React.useState(categories.map(category => category.title))
  const [expandedGroups, setExpandedGroups] = React.useState([])
  const columns = [
    { header: intl.content_table_category[locale], property: 'category.title', render: post => post.category ? post.category.title : <Link to={categoriesByTitle[post['category.title']].path}>{post['category.title']}</Link> },
    { header: intl.content_table_image[locale], property: 'image', render: post => post['category.title'] && categoriesByTitle[post['category.title']].image ? <Box height='xsmall'><Image gatsbyImage={categoriesByTitle[post['category.title']].image.childImageSharp} /></Box> : post.image ? <Box height='xsmall'><Image gatsbyImage={post.image.childImageSharp} /></Box> : <Box height='xsmall' fill='horizontal' background='dark-1' /> },
    { header: intl.content_table_title[locale], property: 'title', render: post => post.path && <Link to={post.path}>{post.title}</Link> },
    { header: intl.content_table_gallery[locale], property: 'gallery', render: post => post['category.title'] ? null : post.gallery ? <Text>{post.gallery.length}</Text> : <StatusDisabled size='small' /> },
    { header: intl.content_published[locale], property: 'published', render: post => post['category.title'] ? <CategoryPublishedMeter posts={postsByCategoryTitle[post['category.title']]} /> : post.published ? <StatusGoodSmall size='small' color='status-ok' /> : <StatusDisabled size='small' /> }
  ]
  return (
    <Box fill flex>
      <Box fill pad='small' align='center' justify='center'>
        <Stack anchor='center'>
          <Box><Meter size='small' type='circle' values={[{ value: publishedPercent, color: 'status-ok' }]} /></Box>
          <Box>
            <Box><Text>{intl.content_published[locale]}:</Text></Box>
            <Box align='center' justify='center' direction='row' gap='xxsmall'><Text size='large' weight='bold'>{publishedPercent}</Text><Text size='small'>%</Text></Box>
            <Box align='center' justify='center'><Text size='small'>+{publishedCount} / {posts.length} / -{posts.length - publishedCount}</Text></Box>
          </Box>
        </Stack>
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
  query ContentQuery($locale: String = "en") {
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
