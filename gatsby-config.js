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
      twitter: 'MayapurNews'
    }
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
        path: `${__dirname}/content/assets`,
        name: 'assets'
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
        icon: 'content/assets/icon.jpg'
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
