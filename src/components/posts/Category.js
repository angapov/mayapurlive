import React from 'react'
import { Box, Heading } from 'grommet'
import Posts from './Posts'

export default ({ category }) => {
  return (
    <Box fill>
      <Box align='center' justify='center' fill='horizontal'><Heading level={2}>{category.title}</Heading></Box>
      <Box pad='small'>
        <Posts posts={category.posts} />
      </Box>
    </Box>
  )
}
