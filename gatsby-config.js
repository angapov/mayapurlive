require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`
  path: '.env.build'
})

module.exports = {
  siteMetadata: {
    title: 'Mayapur Live',
    description: '"My idea is to attract people of the whole world to Māyāpur." Srila Prabhupada, the Founder-Ācārya of ISKCON',
    siteUrl: 'https://mayapur.live',
    social: {
      email: 'haribol@mayapur.live',
      facebook: 'https://facebook.com/sri.dham.mayapur',
      instagram: 'https://instagram.com/sri_dham_mayapur',
      googleGroup: 'Mayapur-Forum'
    }
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/categories`,
        name: 'categories'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [ // FIXME: add dynamicaly from intl.locales
          {
            // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
            name: 'en',
            // A function for filtering nodes. () => true by default
            // filterNodes: node => node.frontmatter.locale === 'en'
            filterNodes: node => node.frontmatter && node.frontmatter.locale === 'en'
            // Add to index custom entries, that are not actually extracted from gatsby nodes
            // customEntries: [{ title: 'Pictures', content: 'awesome pictures', url: '/pictures' }]
          },
          {
            name: 'ru',
            filterNodes: node => node.frontmatter && node.frontmatter.locale === 'ru'
          }
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          // { name: 'content' }, // NOTE: full text search is cool but index will be too big
          { name: 'tags' },
          { name: 'slug', store: true }
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            // content: node => node.rawMarkdownBody,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug
          }
        },
        // custom index file name, default is search_index.json
        filename: 'search_index.json',
        // custom options on fetch api call for search_ındex.json
        fetchOptions: {
          credentials: 'same-origin'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-148048160-2' // FIXME: move to env variable?
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mayapur Live',
        short_name: 'Mayapur Live',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'content/images/icon.jpg'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
  mapping: {
    'MarkdownRemark.frontmatter.category': 'MarkdownRemark.frontmatter.category_id'
  }
}
