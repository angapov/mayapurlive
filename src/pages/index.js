import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Home from '../components/home/Home'
import PageSEO from '../components/seo'

import testData from '../../content/test-data.json'

const HomePage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { categories } = testData

  return (
    <Layout title={title}>
      <PageSEO title='Home' />
      <Home categories={categories} />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
  }
`
