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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
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
  ]
}
