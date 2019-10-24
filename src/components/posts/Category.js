import React from 'react'
import { Box, Heading, Stack } from 'grommet'
import Posts from './Posts'
import Image from '../Image'

export default ({ category }) => {
  return (
    <Box fill>
      <Box fill='horizontal' justify='center' align='center'>
        <Stack fill>
          <Box fill='horizontal' width='medium' height='small'><Image gatsbyImage={category.image.childImageSharp} /></Box>
          {/* <Box fill background={{ color: 'black', opacity: 'medium' }} /> */}
          <Box align='center' justify='end' fill>
            <Box align='center' fill='horizontal' pad='small' background={{ color: 'black', opacity: 'medium' }}><Heading color='light-1' level={2}>{category.title}</Heading></Box>
          </Box>
        </Stack>
      </Box>
      <Box pad='small'>
        <Posts posts={category.posts} />
      </Box>
    </Box>
  )
}
