import React from 'react'
import { Box, Heading } from 'grommet'
import { Tag } from 'grommet-icons'
import Posts from '../posts/Posts'

export default ({ tag, posts }) => {
  return (
    <Box fill pad='small'>
      <Box fill='horizontal' align='center' justify='center' pad='small'>
        <Box direction='row' gap='xsmall'><Box align='center' justify='center'><Tag color='control' /></Box> <Heading level={2}>{tag}</Heading></Box>
      </Box>
      <Posts posts={posts} />
    </Box>
  )
}
