require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`
  path: '.env.build'
})

module.exports = {
  siteMetadata: {
    title: 'Mayapur Live',
    author: 'Mayapur Information Department',
    description: 'A Gatsby WordPress Starter with special love for Netlify',
    siteUrl: 'https://mayapur.now.sh',
    social: {
      twitter: 'MayapurNews'
    },
    postPrefix: '/blog',
    pagePrefix: ''
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
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
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        // baseUrl: 'gatsbynetliflydemo.justinwhall.com',
        baseUrl: 'mayapurlive.wordpress.com',
        // baseUrl: 'mayapuronline.ru',
        // WP.com sites set to true, WP.org set to false
        // hostingWPCOM: false,
        hostingWPCOM: true,
        // The protocol. This can be http or https.
        protocol: 'https',
        // protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
          wpcom_user: process.env.WORDPRESS_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        excludedRoutes: [
          '/*/*/comments',
          '/yoast/**',
          '/oembed/*'
        ],
        normalizer: function ({ entities }) {
          return entities
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
