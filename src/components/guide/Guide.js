import React from 'react'
import { Box } from 'grommet'
import Top from './Top'
import Posts from '../posts/Posts'

export default ({ posts }) => {
  return (
    <Box flex>
      <Box fill='horizontal'>
        <Top />
      </Box>
      <Box pad='small'>
        <Posts posts={posts} />
      </Box>
    </Box>
  )
}
