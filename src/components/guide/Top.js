import React from 'react'
import { Box, Stack } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../Image'

const Top = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "tovp-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box fill>
      <Stack fill>
        <Box fill height={{ max: 'small' }}>
          <Image gatsbyImage={data.file.childImageSharp} />
        </Box>
        <Box fill justify='end'>
          <Box fill='horizontal' height='50px' background={{ color: 'dark-1', opacity: 'medium' }} />
        </Box>
      </Stack>
    </Box>
  )
}

export default Top
