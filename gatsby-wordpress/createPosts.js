
const path = require('path')
// const createHash = require('crypto').createHash
// path: `${postPrefix}/${edge.node.slug.slice(-60)}-${createHash('md5').update(page.path).digest('hex')}`,
// https://github.com/gatsbyjs/gatsby/issues/4125

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/post.js')

  return graphql(
    `
    {
      site {
        siteMetadata {
          postPrefix
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            modified
            categories {
              name
            }
            fields {
              deploy
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { postPrefix } = result.data.site.siteMetadata
    const { edges } = result.data.allWordpressPost

    edges.forEach(edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: `${postPrefix}/${edge.node.slug}`,
          component: postTemplate,
          context: {
            id: edge.node.id
          }
        })
      }
    })
    // ==== END POSTS ====
    return null
  })
}
