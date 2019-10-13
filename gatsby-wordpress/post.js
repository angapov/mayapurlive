import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const PostTemplate = (props) => {
  const post = props.data.wordpressPost
  const siteTitle = props.data.site.siteMetadata.title
  let featuredImage = false

  if (post.featured_media && post.featured_media.source_url) {
    featuredImage = post.featured_media.source_url
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.excerpt}
      />
      <h1>{post.title} </h1>
      {featuredImage &&
        <img src={featuredImage} alt={post.title} />}
      <div>
        <div>{post.date}</div>
        <Link to={`/category/${post.categories[0].slug}`}>
          {post.categories[0].name}{' '}
        </Link>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostById($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      modified
      excerpt
      id
      # featured_media {
      #   source_url
      # }
      categories {
        name
        slug
      }
      content
    }
  }
`
