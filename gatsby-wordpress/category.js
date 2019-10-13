import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const CategoryTemplate = (props) => {
  const {
    title,
    postPrefix
  } = props.data.site.siteMetadata
  const posts = props.data.allWordpressPost.edges

  return (
    <Layout location={props.location} title={title}>
      <Seo
        title={`Archive | ${props.pageContext.name}`}
        description={`Archive for ${props.pageContext.name} category`}
      />
      <h1>{props.pageContext.name}</h1>
      {posts.map(({ node }) => {
        return (
          <div key={node.slug}>
            <h3>
              <Link to={`${postPrefix}/${node.slug}`}> {node.title}</Link>
            </h3>
            <small>{node.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.excerpt
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
query category($slug: String) {
  site {
    siteMetadata {
      title
      author
      postPrefix
    }
  }
  allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
    edges {
      node {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        modified
        excerpt
        id
        categories {
          name
          id
          slug
        }
        content
      }
    }
  }
}
`
